{% liquid
unless events
  assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
endunless
%}
| Event / Date / Slug | Namespaces / Links |
| ----- | ---------- | ---- |{% for event in events %}{% liquid
assign slug = event.ref | split: '/' | last
%}
| {% render 'Event', name: slug %} {% if event.data.event.unlisted %}(:Icon{icon="codicon:eye-closed"}){% endif %}<br><small>{{ event.data.event.date }} &middot; {{slug}} </small> | {% render 'EventNamespaceLinks', name: slug %}<br><small>{% if event.data.event.eventpopId %}[Eventpop](https://eventpop.me/e/{{ event.data.event.eventpopId }}){% endif %}</small> |{% endfor %}