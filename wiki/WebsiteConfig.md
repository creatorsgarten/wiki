---
a: 1
b: 2
x:
  y: 2
  z: [3, 4]
---

<table><thead><tr><th>Key</th><th>Value</th></tr></thead><tbody>
{%- for entry in page %}
<tr><td>{{entry[0] | escape}}</td><td><tt>{{ entry[1] | json | escape }}</tt></td></tr>
{%- endfor %}
</tbody></table>