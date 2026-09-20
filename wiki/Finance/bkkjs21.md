---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 13000
  expenses:
    - label: Food and Beverage
      amount: 6910
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿6,090.00.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿6,090.00 surplus is held in an organizer's account. The ledger does not record it being spent on a later event.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
