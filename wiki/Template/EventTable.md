{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages
endunless
%}
| Event | Slug | Subpages |
| ----- | ---- | -------- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% render 'Event', name: slug %} | {{ slug }} |{% endfor %}