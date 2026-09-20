---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 58000
  expenses:
    - label: Venue
      amount: 25000
    - label: Prize
      amount: 1000
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿32,000.00.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿32,000 surplus was pooled and later part-funded [[Finance/wind2|wind2]].

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
