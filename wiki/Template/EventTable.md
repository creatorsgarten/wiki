{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages
endunless
%}
| Event | Slug | Subpages |
| ----- | ---- | -------- |
{% for event in events -%}
| {{ event.ref }} |
{%- endfor %}