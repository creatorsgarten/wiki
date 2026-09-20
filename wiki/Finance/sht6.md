---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 33331.69
  expenses:
    - label: Food and Beverage
      amount: 16352
    - label: Prize
      amount: 11011
    - label: Equipment
      amount: 5968.69
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing exactly break-even.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

Income and expenses balanced exactly — the only edition to close at zero. No surplus was carried forward.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
