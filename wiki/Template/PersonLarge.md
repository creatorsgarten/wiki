{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
assign image = base.data.image
unless image contains '://'
  assign image = 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=@' | append: n
endunless
-%}
<a href="/wiki/{{ base.ref }}" class="person-card">
  <img src="{{ image }}" alt="{{ base.data.person.name }}" class="person-avatar">
  <div class="person-name">{{ base.data.person.name }}</div>
  <div class="person-nickname">({{ base.data.person.nicknameTh }})</div>
  {% if base.data.person.intro %}
  <div class="person-intro">{{ base.data.person.intro }}</div>
  {% endif %}
</a>