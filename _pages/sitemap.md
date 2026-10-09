---
layout: archive
title: "Sitemap"
excerpt: "Explore the pages, publications, and teaching on Dr. Hang Li's website."
permalink: /sitemap/
author_profile: false
---

<p class="page-lead">A directory of this website. An <a href="{{ '/sitemap.xml' | relative_url }}">XML sitemap</a> is also available.</p>

<section class="sitemap-section" aria-labelledby="sitemap-pages">
  <h2 id="sitemap-pages">Pages</h2>
  <ul class="sitemap-list">
    {% assign pages = site.pages | sort: 'title' %}
    {% for entry in pages %}
      {% if entry.title and entry.sitemap != false and entry.redirect_to == nil %}
        <li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a></li>
      {% endif %}
    {% endfor %}
    <li><a href="{{ '/files/cv.pdf' | relative_url }}">Curriculum vitae (PDF)</a></li>
  </ul>
</section>

<section class="sitemap-section" aria-labelledby="sitemap-publications">
  <h2 id="sitemap-publications">Publications</h2>
  <ul class="sitemap-list">
    {% assign publications = site.publications | sort: 'date' | reverse %}
    {% for entry in publications %}
      {% assign entry_year = entry.date | date: '%Y' %}{% if entry.publication_year %}{% assign entry_year = entry.publication_year %}{% endif %}
      <li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a> <span class="sitemap-year">{{ entry_year }}</span></li>
    {% endfor %}
  </ul>
</section>

<section class="sitemap-section" aria-labelledby="sitemap-teaching">
  <h2 id="sitemap-teaching">Teaching</h2>
  <ul class="sitemap-list">
    {% assign courses = site.teaching | sort: 'date' | reverse %}
    {% for entry in courses %}
      <li><a href="{{ entry.url | relative_url }}">{{ entry.title | escape }}</a> <span class="sitemap-year">{{ entry.date | date: '%Y' }}</span></li>
    {% endfor %}
  </ul>
</section>
