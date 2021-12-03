---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
{% include base_path %}
## Major Peer-reviewed Conference and Journal Papers

{% for post in site.publications reversed %}
  {% capture pub_type %}{{ post.pub_type }}{% endcapture %}
  {% if pub_type == "major_publication" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Minor Lightly-Reviewed Posters, Extended Abstracts, and Workshop Papers

{% for post in site.publications reversed %}
  {% capture pub_type %}{{ post.pub_type }}{% endcapture %}
  {% if pub_type == "minor_publication" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<!-- VISA Tracking Code for https://hangli.me --><script>(function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','1aefb261-53d4-11ec-b589-901b0edac50a','va')</script><!-- VISA Tracking Code for https://hangli.me -->
