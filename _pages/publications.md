---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
hide_title: true
body_class: collection-page
description: "Research publications by Dr. Hang Li on information retrieval, relevance feedback, large language models, and retrieval augmented generation."
---

<header class="page-header">
  <p class="eyebrow">Research library</p>
  <h1>Publications<span class="accent-dot">.</span></h1>
  <p class="page-lead">Exploring how we retrieve information, learn from feedback, and evaluate intelligent search systems.</p>
</header>

<div data-publication-browser>
  <div class="publication-tools" data-publication-controls hidden>
    <div class="filter-buttons" role="group" aria-label="Filter publications by type">
      <button class="filter-button is-active" type="button" data-publication-filter="all" aria-pressed="true">All publications</button>
      <button class="filter-button" type="button" data-publication-filter="peer-reviewed" aria-pressed="false">Peer-reviewed</button>
      <button class="filter-button" type="button" data-publication-filter="other" aria-pressed="false">Preprints &amp; workshops</button>
    </div>
    <div class="publication-search">
      <label for="publication-search">Search publications</label>
      <input id="publication-search" type="search" placeholder="Title, author, or venue" data-publication-search autocomplete="off" aria-controls="publication-list">
    </div>
  </div>
  <p class="publication-count" data-publication-count aria-live="polite" aria-atomic="true">{{ site.publications | size }} publications</p>
  <div class="publication-list" id="publication-list">
    {% assign publication_years = site.publications | group_by: "publication_year" | sort: "name" | reverse %}
    {% for year in publication_years %}
      <section class="publication-year" data-publication-year aria-labelledby="year-{{ year.name }}">
        <h2 class="publication-year__heading" id="year-{{ year.name }}">{{ year.name }}</h2>
        <div class="publication-year__items">
          {% assign year_publications = year.items | sort: "date" | reverse %}
          {% for post in year_publications %}
            {% include publication-card.html post=post %}
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
  <p class="publication-empty" data-publication-empty hidden>No publications match your search. Try another title, author, or venue.</p>
</div>
