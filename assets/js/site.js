/* Small, dependency-free enhancements. All content is readable without JavaScript. */
(function () {
  'use strict';

  var root = document.documentElement;
  var modes = ['system', 'light', 'dark'];
  var themeButton = document.querySelector('.theme-toggle');
  var systemTheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function updateTheme(mode) {
    if (modes.indexOf(mode) === -1) mode = 'system';
    var dark = mode === 'dark' || (mode === 'system' && systemTheme && systemTheme.matches);
    root.dataset.themeMode = mode;
    root.dataset.theme = dark ? 'dark' : 'light';
    var themeMeta = document.getElementById('theme-color-meta');
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#11161f' : '#f5f6f8');
    if (themeButton) {
      var next = modes[(modes.indexOf(mode) + 1) % modes.length];
      themeButton.setAttribute('aria-label', 'Appearance: ' + mode + '. Switch to ' + next + ' appearance.');
      themeButton.setAttribute('title', 'Appearance: ' + mode + ' · next: ' + next);
      themeButton.querySelectorAll('[data-theme-icon]').forEach(function (icon) {
        if (icon.getAttribute('data-theme-icon') === mode) icon.removeAttribute('hidden');
        else icon.setAttribute('hidden', '');
      });
    }
  }

  updateTheme(root.dataset.themeMode || 'system');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.addEventListener('click', function () {
      var next = modes[(modes.indexOf(root.dataset.themeMode) + 1) % modes.length];
      updateTheme(next);
      try { localStorage.setItem('hangli-theme', next); } catch (error) {}
    });
  }
  if (systemTheme) {
    var systemThemeChanged = function () {
      if (root.dataset.themeMode === 'system') updateTheme('system');
    };
    if (systemTheme.addEventListener) systemTheme.addEventListener('change', systemThemeChanged);
    else if (systemTheme.addListener) systemTheme.addListener(systemThemeChanged);
  }
  window.addEventListener('storage', function (event) {
    if (event.key === 'hangli-theme') updateTheme(event.newValue || 'system');
  });

  var masthead = document.querySelector('.masthead');
  var menuButton = document.querySelector('.menu-toggle');
  var navigation = document.getElementById('site-navigation');

  function closeMenu(restoreFocus) {
    if (!menuButton || !navigation) return;
    navigation.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  }

  if (menuButton && navigation) {
    menuButton.hidden = false;
    menuButton.addEventListener('click', function () {
      var expanded = menuButton.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMenu(false);
      else {
        navigation.classList.add('is-open');
        document.body.classList.add('nav-open');
        menuButton.setAttribute('aria-expanded', 'true');
        menuButton.setAttribute('aria-label', 'Close navigation');
      }
    });
    navigation.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
    });
    document.addEventListener('click', function (event) {
      if (masthead && !masthead.contains(event.target)) closeMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.getComputedStyle(menuButton).display === 'none') closeMenu(false);
    });
  }

  document.querySelectorAll('[data-publication-browser]').forEach(function (browser) {
    var buttons = Array.from(browser.querySelectorAll('[data-publication-filter]'));
    var search = browser.querySelector('[data-publication-search]');
    var cards = Array.from(browser.querySelectorAll('[data-publication-card]'));
    var years = Array.from(browser.querySelectorAll('[data-publication-year]'));
    var count = browser.querySelector('[data-publication-count]');
    var empty = browser.querySelector('[data-publication-empty]');
    var category = 'all';

    function normalise(value) {
      var text = (value || '').toLowerCase();
      return text.normalize ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;
    }

    function filterPublications() {
      var terms = normalise(search ? search.value : '').trim().split(/\s+/).filter(Boolean);
      var visible = 0;
      cards.forEach(function (card) {
        var searchable = normalise(card.getAttribute('data-search-text') || card.textContent);
        var matchesCategory = category === 'all' || card.getAttribute('data-publication-category') === category;
        var matchesSearch = terms.every(function (term) { return searchable.indexOf(term) !== -1; });
        card.hidden = !(matchesCategory && matchesSearch);
        if (!card.hidden) visible += 1;
      });
      years.forEach(function (year) {
        year.hidden = !Array.from(year.querySelectorAll('[data-publication-card]')).some(function (card) { return !card.hidden; });
      });
      buttons.forEach(function (button) {
        var active = button.getAttribute('data-publication-filter') === category;
        button.setAttribute('aria-pressed', String(active));
        button.classList.toggle('is-active', active);
      });
      if (count) count.textContent = visible + (visible === 1 ? ' publication' : ' publications');
      if (empty) empty.hidden = visible !== 0;
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        category = button.getAttribute('data-publication-filter') || 'all';
        filterPublications();
      });
    });
    if (search) search.addEventListener('input', filterPublications);
    browser.querySelectorAll('[data-publication-controls]').forEach(function (controls) { controls.hidden = false; });
    filterPublications();
  });

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(function (element) {
      element.classList.add('reveal-ready');
      observer.observe(element);
    });
  }
}());
