<table>
<thead>
<tr>
<th>{{ headerText }}</th>
<th style="text-align:right">Amount</th>
</tr>
</thead>
<tbody>
{%- assign total = 0 -%}
{%- for item in data-%}
<tr>
  <td>{{ item.label }}</td>
  <td style="text-align:right">{{ item.amount | round: 2 | comma_separated }}</td>
  {%- assign total = total | plus: item.amount -%}
</tr>
{%- endfor -%}
<tfoot>
<tr>
  <th>{{ footerText }}</th>
  <th style="text-align:right">{{ total | round: 2 | comma_separated }}</th>
</tr>
</tfoot>
</tbody>
</table>