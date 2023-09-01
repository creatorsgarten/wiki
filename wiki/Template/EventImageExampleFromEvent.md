{% liquid
assign n = name | default: 'reactmeetup0623' | split: '/' | last
assign base = 'Events/' | append: n | get_page
assign link = link | default: true
-%}{% if link %}<a href="/wiki/{{ base.ref }}">{% endif %}{% render 'EventImageExample',
    square: base.data.image,
    cover: base.data.imageAssets.cover,
    poster: base.data.imageAssets.poster,
    banner: base.data.imageAssets.banner %}{% if link %}</a>{% endif %}