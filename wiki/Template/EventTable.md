{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages
endunless
%}
| Event | Slug | Subpages |
| ----- | ---- | -------- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {{ event.ref }} | {{ slug }} |{% endfor %}