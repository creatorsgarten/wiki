---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 34850
  expenses:
    - label: Prize
      amount: 22352
    - label: Food and Beverage
      amount: 11161
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿1,337.00.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿1,337.00 surplus was pooled into the shared organizer account.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
