{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
-%}
<div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:0.5rem;">
{% for person in people %}{% liquid
  assign slug = person.ref | split: '/' | last
%}{% render 'PersonLarge', name: slug %}{% endfor %}
</div>
<style>
@media (min-width: 400px) {
  [style*="grid-template-columns:repeat(2, 1fr)"] {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 2rem !important;
  }
}
</style>