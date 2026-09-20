---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 167000
  expenses:
    - label: Food and Beverage
      amount: 55586
    - label: Equipment
      amount: 38722.65
    - label: Miscellaneous Expense
      amount: 21007.06
    - label: Discrepancy Expense
      amount: 7902.54
    - label: Swag
      amount: 5871
    - label: Prize
      amount: 4023
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿33,887.75.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿33,887.75 surplus is held in an organizer's account. The ledger does not record it being spent on a later event.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
