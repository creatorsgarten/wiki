---
a: 1
b: 2
---

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in page %}
<tr><td>{{entry[0] | escape}}</td><td><code>{{ entry[1] | json | escape }}</code></td></tr>
{%- endfor %}
</tbody></table>