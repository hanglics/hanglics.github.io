---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

<img src="images/uq-banner.png" alt="uq-banner" width="200"/>

# About Me

Hang Li is currently a PhD student at [IELab](http://ielab.io/) in the [Faculty of ngineering, Architecture and Information Technology](https://www.eait.uq.edu.au/) at the [University of Queensland](https://www.uq.edu.au/), Australia, where he works closely with [A/Prof. Guido Zuccon](http://ielab.io/people/guido-zuccon), [Dr. Bevan Koopman](http://bevankoopman.github.io/), and [Dr. Ahmed Mourad](http://ielab.io/people/ahmed-mourad). Prior to Ph.D, Hang received his Bachelor of Science degree in [Computer Science](https://cse.umn.edu/cs) at the [University of Minnesota Twin-Cities](https://twin-cities.umn.edu/) in United States in during 2012-2016.

Hang works at the intersection of **Conversational Search**, **Natural Language Processing(NLP)**, and **Machine Learning(ML)** applications, where he utilises **different relevance feedbacks** to empower the **conversational search system**. His recent work seeks to address the **gap** between **relevance feedback**, **deep language models**, and **conversational search** through different approaches that helps to improve the conversational system effectiveness with **minimal efficiency cost**.

Hang publishes at premier academic venues in IR (e.g. SIGIR, ECIR, TOIS). His work is supported by [Grains Research and Development Corporation](https://grdc.com.au/), through the [AgAsk project](http://ielab.io/projects/agask.html).


# News

* <b>2020-12-15</b> <br> 📃 Our paper [Deep Query Likelihood Model for Information Retrieval]({{ base_path }}/files/ecir2021.pdf) has been accepted to [ECIR 2021](https://www.ecir2021.eu) as a short paper! The code is open-sourced [here](https://github.com/ielab/GPT_Ranker). A video of the work is available [here](https://www.youtube.com/watch?v=oSGbYaC0ur0).

* <b>2020-12-06</b> <br> 📃 Our paper [Design and Research of Intelligent Question-Answering(Q&A) System Based on High School Course Knowledge Graph]({{ base_path }}/files/mob2021.pdf) has been accepted to [Mobile Networks and Applications](https://www.springer.com/journal/11036) as a journal paper!

* <b>2020-11-11</b> <br> 📃 Our workshop paper [IELAB for TREC Conversational Assistance Track (CAsT) 2020](https://trec.nist.gov/pubs/trec29/papers/ielab.C.pdf) is now published online! Our submissions are open-sourced [here](https://github.com/ielab/trec-cast-2020-public).

* <b>2020-07-26</b> <br> 💬 I will present our work on [Systematic Review Automation Tools for End-to-End Query Formulation]({{ base_path }}/files/sigir2020_tools.pdf) at the [SIGIR 2020](https://sigir.org/sigir2020/)!

* <b>2020-04-22</b> <br> 📃 Our paper [Systematic Review Automation Tools for End-to-End Query Formulation]({{ base_path }}/files/sigir2020_tools.pdf) has been accepted to [SIGIR 2020](https://sigir.org/sigir2020/) as a Demo paper! The code is open-sourced [here](https://github.com/ielab/searchrefiner). A video of my talk is also available [online](https://dl.acm.org/doi/10.1145/3397271.3401402).

<details class="page__news">
  <summary>MORE...</summary>
  <ul>
    <li><b>2020-03-01</b> <br> 🏫 I am thrilled to announce that I will be joining <a href="http://ielab.io/" target="_blank">IELab</a> @ <a href="https://www.uq.edu.au/" target="_blank">UQ</a> as a Ph.D student in Information Retrieval starting next month!</li>
  </ul>
</details>

<br>

# Travel

* <b>2021-11-01 -- 2021-11-05</b> <br> ✈️ Gold Coast, Australia for CIKM 2021

* <b>2021-07-11 -- 2021-07-15</b> <br> ✈️ ~~Montréal, Québec, Canada for SIGIR/ICTIR 2021~~ (Cancelled due to COVID-19)

* <b>2021-04-19 -- 2021-04-23</b> <br> ✈️ ~~Ljubljana, Slovenia for WWW 2021~~ (Cancelled due to COVID-19)

* <b>2021-03-28 -- 2021-04-01</b> <br> ✈️ ~~Lucca, Italy for ECIR 2021~~ (Cancelled due to COVID-19)

<details class="page__travel">
  <summary>MORE...</summary>
  <ul>
    <li><b>2021-03-14 -- 2021-03-19</b> <br> ✈️ <s>Canberra, Australia for CHIIR 2021</s> (Cancelled due to COVID-19)</li>
    <li><b>2021-03-08 -- 2021-03-12</b> <br> ✈️ <s>Jerusalem, Israel for WSDM 2021</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-10-19 -- 2020-10-23</b> <br> ✈️ <s>Galway, Ireland for CIKM 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-09-14 -- 2020-09-17</b> <br> ✈️ <s>Stavanger, Norway for ICTIR 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-08-13 -- 2020-08-14</b> <br> ✈️ <s>Vancouver, Canada for CHIIR 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-07-25 -- 2020-07-30</b> <br> ✈️ <s>Xi'An, China for SIGIR 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-07-05 -- 2020-07-10</b> <br> ✈️ <s>Seattle, WA, USA for NAACL 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-04-20 -- 2020-04-24</b> <br> ✈️ <s>Taipei, Taiwan for WWW 2020</s> (Cancelled due to COVID-19)</li>
    <li><b>2020-04-14 -- 2020-04-17</b> <br> ✈️ <s>Lisbon, Portugal for ECIR 2020</s> (Cancelled due to COVID-19)</li>
  </ul>
</details>

<br>

# Recent Publications

{% for post in site.publications reversed %}
  {% capture pub_type %}{{ post.pub_type }}{% endcapture %}
  {% if pub_type == "major_publication" %}
    {% include archive-single-about.html %}
  {% endif %}
{% endfor %}
