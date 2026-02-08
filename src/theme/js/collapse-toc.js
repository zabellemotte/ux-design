document.addEventListener("DOMContentLoaded", () => {
  const collapseChapters = () => {
    const chapters = document.querySelectorAll(".sidebar-scrollbox li.chapter-item");
    chapters.forEach(chapter => {
      const activeLink = chapter.querySelector("a.active");
      if (!activeLink) {
        chapter.classList.remove("expanded");
        chapter.classList.add("collapsed");
      } else {
        chapter.classList.add("expanded");
        chapter.classList.remove("collapsed");
      }
    });
  };

  // Exécute une première fois
  collapseChapters();

  // Observe les changements dans la sidebar pour réappliquer le repli
  const sidebar = document.querySelector(".sidebar-scrollbox");
  if (sidebar) {
    const observer = new MutationObserver(() => {
      collapseChapters();
    });
    observer.observe(sidebar, { childList: true, subtree: true });
  }
});