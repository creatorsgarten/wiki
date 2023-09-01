{% liquid
assign n = name | default: 'reactmeetup0623' | split: '/' | last
assign base = 'Events/' | append: n | get_page
-%}<a href="/wiki/{{ base.ref }}">{% render 'EventImageExample',
    square: base.data.image,
    cover: base.data.imageAssets.cover,
    poster: base.data.imageAssets.poster,
    banner: base.data.imageAssets.banner %}</a>