{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
endunless
%}
| Event | Namespaces | Date | Slug |
| ----- | ---------- | ----:| ---- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% render 'Event', name: slug %} {% if event.data.event.unlisted %}(:Icon{icon="codicon:eye-closed"}){% endif %} | {% render 'EventNamespaceLinks', name: slug %} | <span style="white-space: nowrap">{{ event.data.event.date }}</span> | {{ slug }} |{% endfor %}