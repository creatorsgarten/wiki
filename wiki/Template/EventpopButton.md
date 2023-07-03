{% liquid
if id
  assign url = 'https://eventpop.me/e/' | concat: id
endif
assign url = url | default: 'https://eventpop.me/'
-%}

<p style="text-align:center">
<a href="{{ url }}" style="display: inline-block; max-width: min(80vw,360px); border: 1px solid #ccc; border-radius: 1em; box-sizing: border-box; padding: 0 0.5em;"><img style="max-width: 100%; margin: 0" src="https://github.com/creatorsgarten/assets/raw/main/eventpop/en-primary-vertical.svg" alt="Tickets available at eventpop.me" /></a>
</p>

{%- if ref %}

# How to use this template

{% raw %}
Put this in an event page:

```
{% render 'EventpopButton', id: event.eventpopId %}
```
{% endraw %}

{% endif -%}