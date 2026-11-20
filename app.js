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

function updateCourses() {
  const query = courseSearch?.value.trim().toLocaleLowerCase() || "";
  const minimumAttendance = attendanceFilter?.value === "all"
    ? 0
    : Number(attendanceFilter.value);

  const visibleCards = courseCards.filter((card) => {
    const matchesQuery = card.textContent.toLocaleLowerCase().includes(query);
    const matchesAttendance = getAttendance(card) >= minimumAttendance;
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

courseSearch?.addEventListener("input", updateCourses);
attendanceFilter?.addEventListener("change", updateCourses);
courseSort?.addEventListener("change", updateCourses);

clearSearch?.addEventListener("click", () => {
  if (courseSearch) {
    courseSearch.value = "";
    courseSearch.focus();
  }
  const printDashboard = document.querySelector("#print-dashboard");
printDashboard?.addEventListener("click", () => window.print());

updateCourses();
});

courseSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    courseSearch.value = "";
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
let savedTheme = "light";
try {
  savedTheme = localStorage.getItem("ucp-clone-theme") || "light";
} catch {
  // Storage may be unavailable in private or restricted browsing contexts.
}
setTheme(savedTheme === "dark");
themeToggle?.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  setTheme(isDark);
  try {
    localStorage.setItem("ucp-clone-theme", isDark ? "dark" : "light");
  } catch {
    // The toggle still works for the current page when storage is unavailable.
  }
});

updateCourses();
