{% liquid
assign n = name | default: 'reactmeetup0623' | split: '/' | last
assign base = 'Events/' | append: n | get_page
assign link = link | default: true
assign defaultImage = 'https://assets.creatorsgarten.org/events/' | append: n | append: '.png'
assign square = base.data.image | default: defaultImage
-%}{% if link %}<a href="/wiki/{{ base.ref }}">{% endif %}{% render 'EventImageExample',
    square: square,
    cover: base.data.imageAssets.cover,
    poster: base.data.imageAssets.poster,
    banner: base.data.imageAssets.banner %}{% if link %}</a>{% endif %}