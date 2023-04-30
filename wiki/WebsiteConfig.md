---
websiteConfig:
  x:
    y: 2
    z: [3, 4]
---

{% for section in page.websiteConfig %}

# {{ section[0] }}

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in section[1] %}
<tr><td>{{entry[0] | escape}}</td><td><tt>{{ entry[1] | json | escape }}</tt></td></tr>
{%- endfor %}
</tbody></table>

{% endfor %}