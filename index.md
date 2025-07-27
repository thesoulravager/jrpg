---
layout: default
---

<button id="theme-toggle-btn" class="theme-toggle-btn" aria-label="Toggle dark/light mode">🌙 Dark</button>

<header>
  <h1>JRPG Gacha Wiki</h1>
</header>

<div class="centered-content fade-in">
  <div class="nav-buttons">
    <a href="characters.html" class="nav-button">Characters</a>
    <a href="skills.html" class="nav-button">Skills</a>
    <a href="items.html" class="nav-button">Items</a>
  </div>

  <!-- Search Bar with Filters -->
  <div class="search-container">
    <div class="filter-row">
      <button class="filter-btn active" data-filter="all">All</button>
      <button class="filter-btn" data-filter="characters">Characters</button>
      <button class="filter-btn" data-filter="skills">Skills</button>
      <button class="filter-btn" data-filter="items">Items</button>
    </div>
    <input type="text" id="search-input" placeholder="Search the wiki..." autocomplete="off" />
    <ul id="results-container"></ul>
  </div>
</div>

Welcome to your game's wiki! Select a section or search above to begin.

---

_Edit any page using the GitHub editor. All changes go live automatically!_
