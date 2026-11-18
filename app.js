const courseSearch = document.querySelector("#course-search");
const courseCards = [...document.querySelectorAll(".course-card")];
const emptyState = document.querySelector("#empty-state");

function filterCourses(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  let visibleCount = 0;

  courseCards.forEach((card) => {
    const matches = card.textContent.toLocaleLowerCase().includes(normalizedQuery);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
}

if (courseSearch) {
  courseSearch.addEventListener("input", (event) => {
    filterCourses(event.currentTarget.value);
  });
}
