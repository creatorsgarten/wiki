{% liquid
unless people
  assign people = '{"match":{"person":true}}' | query_pages | sort: 'ref'
endunless
-%}
<div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:1.5rem;padding:1rem 0">
{% for person in people %}{% liquid
  assign slug = person.ref | split: '/' | last
%}{% render 'PersonCard', name: slug %}{% endfor %}
</div>
<style>
@media (min-width: 768px) {
  [style*="grid-template-columns:repeat(2, 1fr)"] {
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 2rem !important;
  }
}
</style>