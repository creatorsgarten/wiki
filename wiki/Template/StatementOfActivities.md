<table>
<thead>
<tr>
<th>Source</th>
<th align="right">Amount</th>
</tr>
</thead>
<tbody>
{% for item in data.income %}<tr>
  <td>{{ item.label }}</td>
  <td align="right">{{ item.amount | round: 2 | comma_separated }}</td>
</tr>{% endfor %}
</tbody>
</table>