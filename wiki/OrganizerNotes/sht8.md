---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 119678.73000000001
    - label: Discrepancy Income
      amount: 244.31
  expenses:
    - label: Prize
      amount: 33000
    - label: Food and Beverage
      amount: 30121.5
    - label: Swag
      amount: 28302
    - label: Equipment
      amount: 12901.380000000001
    - label: Accommodation
      amount: 8261.05
    - label: Venue
      amount: 4880
    - label: Transportation
      amount: 702
    - label: Miscellaneous Expense
      amount: 107
---

{% render 'EventBox', name: ref %}

# Useful Links

- Notion - https://grtn.org/e/sht8/notion
- Figma - https://grtn.org/e/sht8/figma
- Pictures - https://drive.google.com/drive/folders/1dd1U8Dq6QDRgYU5xvCJufqX3gmJvj9j8?usp=sharing

# Financials

{% render 'StatementOfActivities', data: page.statementOfActivities %}