{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages
endunless
assign prefixes = 'Coverage,Feedback,OrganizerNotes,Sponsorship' | split: ','
%}
| Event | Subpages | Slug |
| ----- | -------- | ---- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% render 'Event', name: slug %} | {% render 'EventNamespaceLinks', name: slug %} | {{ slug }} |{% endfor %}