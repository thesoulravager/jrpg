// Theme toggle
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById('theme-toggle-btn').textContent =
    theme === 'dark' ? "🌙 Dark" : "☀️ Light";
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}
document.addEventListener("DOMContentLoaded", function() {
  // Theme: default dark
  let savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    savedTheme = 'dark';
    localStorage.setItem('theme', 'dark');
  }
  setTheme(savedTheme);

  // Theme toggle btn
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Search & filtering
  let currentFilter = "all";
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      // Re-run search to update results
      document.getElementById('search-input').dispatchEvent(new Event('input'));
    });
  });

  // SimpleJekyllSearch with custom filtering
  if (window.SimpleJekyllSearch) {
    SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/search.json',
      searchResultTemplate: '<li data-type="{type}"><a href="{url}">{title}</a></li>',
      noResultsText: '<li>No results found</li>',
      limit: 12,
      fuzzy: false,
      success: function() {
        // Filter results by type
        filterResults();
      }
    });

    // Observe input and filter results after search
    document.getElementById('search-input').addEventListener('input', filterResults);
  }

  function filterResults() {
    const results = document.querySelectorAll('#results-container li[data-type]');
    results.forEach(li => {
      if (currentFilter === "all" || li.getAttribute('data-type') === currentFilter) {
        li.style.display = "";
      } else {
        li.style.display = "none";
      }
    });
  }
});
