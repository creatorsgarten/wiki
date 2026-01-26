{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
-%}<div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:0.5rem;">{% for person in people %}{% liquid
  assign slug = person.ref | split: '/' | last
%}{% render 'PersonLarge', name: slug %}{% endfor %}</div>