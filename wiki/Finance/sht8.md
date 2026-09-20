---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 119678.73
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
      amount: 12901.38
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

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿1,648.11.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿1,648.11 surplus was carried forward into [[Finance/sht9|sht9]], where it appears as the opening income line.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
