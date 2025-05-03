<div style="display:flex;gap:20px;flex-wrap:wrap;">
<div style="flex:1 0 360px">
{% render 'StatementOfActivitiesTable', data: data.income, headerText: 'Source', footerText: 'Total Income' %}
</div>
<div style="flex:1 0 360px">
{% render 'StatementOfActivitiesTable', data: data.expenses, headerText: 'Category', footerText: 'Total Expenses' %}
</div>
</div>