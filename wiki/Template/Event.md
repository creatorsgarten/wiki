{% liquid
assign n = name | default: 'sht1' | split: '/' | last
assign base = 'Events/' | append: n | get_page
-%}[{% render 'Icon/Creatorsgarten' %} {{ base.data.name | default: base.data.title | default: n }}](/wiki/{{ base.ref }})