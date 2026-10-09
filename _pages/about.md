---
layout: home
permalink: /
title: "Dr. Hang Li — Search, Retrieval & AI"
excerpt: "Dr. Hang Li (Alex), a postdoctoral researcher at the University of Queensland working on information retrieval, language models, and useful AI systems."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="hero" aria-labelledby="hero-title">
  <div class="hero__copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Researcher · Brisbane, Australia</p>
    <h1 id="hero-title">Dr. Hang Li<span class="hero__alias">(Alex)</span><span class="hero__period">.</span></h1>
    <p class="hero__statement">Better Search.<br><em>More Useful AI.</em></p>
    <p class="hero__intro">I study how retrieval and language models can make information easier to find, understand, and use.</p>
    <p class="hero__affiliation">Postdoctoral Research Fellow at <a href="http://ielab.io/">IELab</a>,<br>the <a href="https://www.uq.edu.au/">University of Queensland</a>.</p>
    <div class="hero__actions">
      <a class="glass-button glass-button--primary" href="#research">Explore My Research <span aria-hidden="true">↗</span></a>
      <a class="glass-button" href="{{ base_path }}/files/cv.pdf">Curriculum Vitae <span aria-hidden="true">↗</span></a>
    </div>
    <div class="hero__links" aria-label="Professional profiles">
      <a href="mailto:{{ site.author.email }}">Email <span aria-hidden="true">↗</span></a>
      <a href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
      <a href="https://github.com/{{ site.author.github }}">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
  </div>
  <div class="hero__portrait">
    <div class="portrait-frame">
      <img src="{{ base_path }}/images/avatar.png" alt="Dr. Hang Li" width="949" height="1000" fetchpriority="high">
      <div class="portrait-caption"><span class="portrait-caption__icon" aria-hidden="true">↗</span><div><strong>Search, Retrieval & AI</strong><span>Information Engineering Lab · UQ</span></div></div>
    </div>
    <span class="portrait-orbit portrait-orbit--one" aria-hidden="true"></span>
    <span class="portrait-orbit portrait-orbit--two" aria-hidden="true"></span>
  </div>
</section>

<section class="research-overview home-section" id="research" aria-labelledby="research-title">
  <div class="section-heading">
    <div><p class="eyebrow">01 / Research</p><h2 id="research-title">Finding the Signal.</h2></div>
    <p>Connecting Effective Retrieval with the Reasoning and Generation Capabilities of Large Language Models.</p>
  </div>
  <div class="research-directions">
    <article class="research-direction"><span class="direction-number">01</span><h3>Retrieval & Feedback</h3><p>Neural and dense retrieval, query representations, and relevance feedback that helps search systems find better evidence.</p><span class="direction-keywords">Information Retrieval · PRF · Dense Retrieval</span></article>
    <article class="research-direction"><span class="direction-number">02</span><h3>Large Language Models & Search</h3><p>Relevance assessment, conversational and agentic search, and the efficient integration of large language models into retrieval pipelines.</p><span class="direction-keywords">LLMs · Agentic Search · NLP</span></article>
    <article class="research-direction"><span class="direction-number">03</span><h3>Grounded Generation</h3><p>Retrieval-augmented generation systems, with a focus on how we design, evaluate, and improve their usefulness.</p><span class="direction-keywords">RAG · Evaluation · Reliable AI</span></article>
  </div>
</section>

<section class="selected-work home-section" aria-labelledby="selected-title">
  <div class="section-heading"><div><p class="eyebrow">02 / Selected Work</p><h2 id="selected-title">Ideas Into Evidence.</h2></div><a class="text-link" href="{{ base_path }}/publications/">All Publications <span aria-hidden="true">↗</span></a></div>
  <div class="selected-work-grid">
    {% assign selected_work = site.publications | where: "selected", true | sort: "selected_order" %}
    {% for publication in selected_work limit:6 %}
      {% include publication-card.html post=publication selected=true %}
    {% endfor %}
  </div>
</section>

<section class="news-section home-section" id="news" aria-labelledby="news-title">
  <div class="section-heading"><div><p class="eyebrow">03 / Latest Updates</p><h2 id="news-title">Along the Way.</h2></div><span class="section-aside">Papers, Milestones & A Little Life.</span></div>
  <ol class="news-list">
    {% for item in site.data.news limit:4 %}
    <li><time datetime="{{ item.date }}">{{ item.date | date: "%d %b %Y" }}</time><div>{{ item.body | replace: 'BASE_PATH', base_path }}</div></li>
    {% endfor %}
  </ol>
  <details class="content-disclosure news-archive"><summary>Earlier Updates <span aria-hidden="true">+</span></summary><ol class="news-list">{% for item in site.data.news offset:4 %}<li><time datetime="{{ item.date }}">{{ item.date | date: "%d %b %Y" }}</time><div>{{ item.body | replace: 'BASE_PATH', base_path }}</div></li>{% endfor %}</ol></details>
</section>

<section class="about-section home-section" id="about" aria-labelledby="about-title">
  <div class="section-heading"><div><p class="eyebrow">04 / Beyond the Papers</p><h2 id="about-title">About Me.</h2></div></div>
  <div class="about-grid">
    <div class="about-story">
      <p>I am currently a Postdoctoral Research Fellow in <a href="http://ielab.io/">IELab</a> within the <a href="https://eecs.uq.edu.au/">School of Electrical Engineering and Computer Science</a> at the <a href="https://www.uq.edu.au/">University of Queensland</a>, Australia. During my PhD, I worked closely with <a href="http://ielab.io/people/guido-zuccon">Prof. Guido Zuccon</a>, <a href="http://bevankoopman.github.io/">A/Prof. Bevan Koopman</a>, and <a href="http://ielab.io/people/ahmed-mourad">Dr. Ahmed Mourad</a> (<a href="{{ base_path }}/files/thesis.pdf">Read My Thesis</a>). Before my PhD, I received my Bachelor of Science degree in <a href="https://cse.umn.edu/cs">Computer Science</a> at the <a href="https://twin-cities.umn.edu/">University of Minnesota Twin Cities</a> in the United States in 2016.</p>
      <p>My research interests include <strong>Information Retrieval (IR)</strong>, <strong>Large Language Models (LLMs)</strong>, <strong>Natural Language Processing (NLP)</strong>, <strong>Agentic Search</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong>, and <strong>Machine Learning (ML)</strong>. In particular, I am interested in developing intelligent search and information-access systems that combine effective retrieval with the reasoning and generation capabilities of LLMs. My research explores topics including neural and dense retrieval, retrieval enhancement and feedback, LLM-based relevance assessment, agentic and conversational search, RAG system design and evaluation, and the efficient and reliable integration of LLMs into real-world information retrieval pipelines.</p>
      <p>I publish at premier academic venues in IR, including SIGIR, ECIR, WSDM, WWW, TOIS, and IJDL. During my PhD, my work was supported by the <a href="https://grdc.com.au/">Grains Research and Development Corporation</a> through the <a href="http://ielab.io/projects/agask.html">AgAsk Project</a>.</p>
    </div>
    <div class="about-notes">
      <article class="note-card"><span class="note-card__icon" aria-hidden="true">↗</span><h3>Teaching & Mentoring</h3><p>Guest lectures, tutorials, and course leadership in information retrieval, concurrency, and web information systems.</p><a class="text-link" href="{{ base_path }}/teaching/">Teaching Experience <span aria-hidden="true">↗</span></a></article>
      <article class="note-card"><span class="note-card__icon" aria-hidden="true">⌘</span><h3>Data for Better Evaluation</h3><p>Agvaluate: a resource for evaluating answers to agricultural questions.</p><a class="text-link" href="https://espace.library.uq.edu.au/view/UQ:0160dc7">Explore the Dataset <span aria-hidden="true">↗</span></a></article>
    </div>
  </div>
  <details class="content-disclosure service-disclosure"><summary>Academic Service <span aria-hidden="true">+</span></summary><div class="service-grid"><div><h3>Programme Committees</h3><dl><div><dt>SIGIR</dt><dd>2022, 2023, 2025, 2026</dd></div><div><dt>ECIR</dt><dd>2023, 2024, 2026</dd></div><div><dt>WSDM</dt><dd>2026</dd></div><div><dt>CIKM</dt><dd>2026</dd></div><div><dt>EMNLP</dt><dd>2026</dd></div><div><dt>The Web Conference</dt><dd>2027</dd></div></dl></div><div><h3>Reviewing & organisation</h3><p>Reviewer for ACM Transactions on Information Systems (TOIS) since 2024.</p><p>Proceedings Chair for CIKM 2021.</p></div></div></details>
  <details class="content-disclosure travel-disclosure"><summary>Travel Archive <span aria-hidden="true">+</span></summary><div class="travel-history">{% capture travel_history %}{% include travel-history.md %}{% endcapture %}{{ travel_history | markdownify }}</div></details>
</section>

<section class="contact-section{% if site.visitor_counter.enabled %} contact-section--with-map{% endif %}" aria-labelledby="contact-title">
  <div class="contact-section__copy">
    <p class="eyebrow">Let’s Connect</p>
    <h2 id="contact-title">Good Questions Lead<br>to <em>Good Conversations.</em></h2>
    <p>Interested in retrieval, language models, or working together? I’d be happy to hear from you.</p>
    <a class="glass-button glass-button--primary" href="mailto:{{ site.author.email }}">{{ site.author.email }} <span aria-hidden="true">↗</span></a>
  </div>
  {% if site.visitor_counter.enabled %}{% include visitor-counter.html %}{% endif %}
</section>
