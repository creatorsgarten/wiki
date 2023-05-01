{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
endunless
assign prefixes = 'Coverage,Feedback,OrganizerNotes,Sponsorship' | split: ','
%}
| Event | Namespaces | Date | Slug |
| ----- | ---------- | ---- | ---- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% if event.data.event.unlisted %}:Icon{icon="codicon:eye-closed"} {% endif %}{% render 'Event', name: slug %} | {% render 'EventNamespaceLinks', name: slug %} | {{ event.data.event.date }} | {{ slug }} |{% endfor %}