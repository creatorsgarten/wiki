{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
-%}<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1.5rem;padding:1rem 0">{% for person in people %}{% liquid
  assign slug = person.ref | split: '/' | last
%}{% render 'PersonLarge', name: slug %}{% endfor %}</div>