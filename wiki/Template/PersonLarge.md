{% liquid
assign n = name | default: 'poom' | split: '/' | last
assign base = 'People/' | append: n | get_page
assign image = base.data.image
unless image contains '://'
  assign image = 'https://api.dicebear.com/6.x/bottts-neutral/svg?seed=@' | append: n
endunless
-%}<a href="/wiki/{{ base.ref }}" style="display:flex;flex-direction:column;align-items:center;text-align:center;padding:0.75rem;border-radius:0.5rem;background:#F5F5F5;text-decoration:none;color:inherit;transition:transform 0.2s, box-shadow 0.2s"><img src="{{ image }}" alt="{{ base.data.person.name }}" style="width:120px;height:120px;border-radius:50%;margin-bottom:0.25rem;object-fit:cover"><div style="font-size:1.125rem;font-weight:600;margin-bottom:0.25rem;text-wrap: balance;line-height:1.25;">{{ base.data.person.name }} ({{ base.data.person.nicknameTh }})</div>{% if base.data.person.intro %}<div style="font-size:0.875rem;color:#4b5563;line-height:1.4;text-wrap: balance;margin-bottom:0.75rem;">{{ base.data.person.intro }}</div>{% endif %}</a>