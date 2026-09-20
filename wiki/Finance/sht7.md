---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 110719.69
  expenses:
    - label: Swag
      amount: 37149.73
    - label: Food and Beverage
      amount: 24543
    - label: Prize
      amount: 20670
    - label: Accommodation
      amount: 10118.89
    - label: Equipment
      amount: 9729
    - label: Transportation
      amount: 100
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿8,409.07.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿8,409.07 surplus is held in the treasurer's account. The ledger does not record it being spent on a later event.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
