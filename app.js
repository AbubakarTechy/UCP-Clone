const courseSearch = document.querySelector("#course-search");
const courseList = document.querySelector("#course-list");
const courseCards = courseList ? [...courseList.querySelectorAll(".course-card")] : [];
const emptyState = document.querySelector("#empty-state");
const resultsSummary = document.querySelector("#course-results");
const clearSearch = document.querySelector("#clear-search");
const courseSort = document.querySelector("#course-sort");
const attendanceFilter = document.querySelector("#attendance-filter");

function getAttendance(card) {
  return Number(card.querySelector('[role="progressbar"]')?.getAttribute("aria-valuenow") || 0);
}

function updateAttendanceSummary() {
  const averageElement = document.querySelector("#attendance-average");
  if (!averageElement || courseCards.length === 0) return;
  const average = courseCards.reduce((total, card) => total + getAttendance(card), 0) / courseCards.length;
  averageElement.textContent = `${Math.round(average)}%`;
}

function updateCourses() {
  const query = courseSearch?.value.trim().toLocaleLowerCase() || "";
  const selectedAttendance = attendanceFilter?.value || "all";
  const minimumAttendance = selectedAttendance === "all" || selectedAttendance === "below90"
    ? 0
    : Number(selectedAttendance);

  const visibleCards = courseCards.filter((card) => {
    const matchesQuery = card.textContent.toLocaleLowerCase().includes(query);
    const attendance = getAttendance(card);
    const matchesAttendance = selectedAttendance === "below90"
      ? attendance < 90
      : attendance >= minimumAttendance;
    card.hidden = !(matchesQuery && matchesAttendance);
    return matchesQuery && matchesAttendance;
  });

  const sortMode = courseSort?.value || "default";
  const sortedCards = [...visibleCards];
  if (sortMode === "name") {
    sortedCards.sort((a, b) => a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent));
  } else if (sortMode === "attendance") {
    sortedCards.sort((a, b) => getAttendance(b) - getAttendance(a));
  }

  sortedCards.forEach((card) => courseList.append(card));
  if (emptyState) emptyState.hidden = visibleCards.length !== 0;
  if (resultsSummary) {
    resultsSummary.textContent = `Showing ${visibleCards.length} of ${courseCards.length} sample courses`;
  }
  if (clearSearch) clearSearch.disabled = !courseSearch?.value;
}

function restoreCoursePreferences() {
  try {
    if (courseSearch) courseSearch.value = localStorage.getItem("ucp-course-query") || "";
    if (attendanceFilter) attendanceFilter.value = localStorage.getItem("ucp-attendance-filter") || "all";
    if (courseSort) courseSort.value = localStorage.getItem("ucp-course-sort") || "default";
  } catch {
    // Preferences remain optional when browser storage is unavailable.
  }
}

function saveCoursePreferences() {
  try {
    localStorage.setItem("ucp-course-query", courseSearch?.value || "");
    localStorage.setItem("ucp-attendance-filter", attendanceFilter?.value || "all");
    localStorage.setItem("ucp-course-sort", courseSort?.value || "default");
  } catch {
    // Filtering and sorting continue to work without persistent storage.
  }
}

restoreCoursePreferences();
courseSearch?.addEventListener("input", () => {
  saveCoursePreferences();
  updateCourses();
});
attendanceFilter?.addEventListener("change", () => {
  saveCoursePreferences();
  updateCourses();
});
courseSort?.addEventListener("change", () => {
  saveCoursePreferences();
  updateCourses();
});

clearSearch?.addEventListener("click", () => {
  if (courseSearch) {
    courseSearch.value = "";
    saveCoursePreferences();
    courseSearch.focus();
  }
  updateCourses();
});

const resetCourseFilters = document.querySelector("#reset-course-filters");
resetCourseFilters?.addEventListener("click", () => {
  if (courseSearch) courseSearch.value = "";
  if (attendanceFilter) attendanceFilter.value = "all";
  if (courseSort) courseSort.value = "default";
  saveCoursePreferences();
  updateCourses();
  courseSearch?.focus();
});

courseSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    courseSearch.value = "";
    saveCoursePreferences();
    updateCourses();
    courseSearch.blur();
  }
});

const navigationLinks = [...document.querySelectorAll(".nav-link")];
function updateActiveNavigation() {
  const currentHash = window.location.hash || "#dashboard";
  navigationLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === currentHash;
    link.classList.toggle("is-active", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}
navigationLinks.forEach((link) => link.addEventListener("click", updateActiveNavigation));
window.addEventListener("hashchange", updateActiveNavigation);
updateActiveNavigation();

const themeToggle = document.querySelector("#theme-toggle");
function setTheme(isDark) {
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }
}
let savedTheme = null;
try {
  savedTheme = localStorage.getItem("ucp-clone-theme");
} catch {
  // Storage may be unavailable in private or restricted browsing contexts.
}
const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches || false;
setTheme(savedTheme ? savedTheme === "dark" : systemPrefersDark);
themeToggle?.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  setTheme(isDark);
  try {
    localStorage.setItem("ucp-clone-theme", isDark ? "dark" : "light");
  } catch {
    // The toggle still works for the current page when storage is unavailable.
  }
});

const printDashboard = document.querySelector("#print-dashboard");
printDashboard?.addEventListener("click", () => window.print());


const exportCourses = document.querySelector("#export-courses");

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

exportCourses?.addEventListener("click", () => {
  const headers = ["Course code", "Course name", "Instructor", "Credits", "Attendance"];
  const rows = courseCards
    .filter((card) => !card.hidden)
    .map((card) => [
      card.querySelector(".course-code")?.textContent.trim() || "",
      card.querySelector("h3")?.textContent.trim() || "",
      card.querySelector(".instructor")?.textContent.trim() || "",
      card.querySelector(".credit-pill")?.textContent.trim() || "",
      `${getAttendance(card)}%`,
    ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
  const file = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ucp-demo-courses.csv";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});


document.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTyping = target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

  if (event.key === "/" && !isTyping && !event.ctrlKey && !event.metaKey && !event.altKey) {
    event.preventDefault();
    courseSearch?.focus();
  }
});

updateAttendanceSummary();
updateCourses();
