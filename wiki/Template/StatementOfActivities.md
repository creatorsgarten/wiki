<table>
<thead>
<tr>
<th>Source</th>
<th style="text-align:right">Amount</th>
</tr>
</thead>
<tbody>
{%- assign total = 0 -%}
{%- for item in data.income -%}
<tr>
  <td>{{ item.label }}</td>
  <td style="text-align:right">{{ item.amount | round: 2 | comma_separated }}</td>
  {%- assign total = total | plus: item.amount -%}
</tr>
{%- endfor -%}
<tfoot>
<tr>
  <th>Total Income</th>
  <th style="text-align:right">{{ total | round: 2 | comma_separated }}</th>
</tr>
</tfoot>
</tbody>
</table>