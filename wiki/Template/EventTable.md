{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
endunless
%}
| Event | Namespaces | Slug |
| ----- | ---------- | ---- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% render 'Event', name: slug %} {% if event.data.event.unlisted %}(:Icon{icon="codicon:eye-closed"}){% endif %}<br><small>{{ event.data.event.date }}</small> | {% render 'EventNamespaceLinks', name: slug %} | {{ slug }} |{% endfor %}