---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 8000
  expenses:
    - label: Prize
      amount: 14769
    - label: Food and Beverage
      amount: 1205
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a shortfall of ฿7,974.00.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

This event ran a ฿7,974.00 shortfall against its own sponsorship income. The gap was covered by leftover funds pooled from earlier events (the same account holding [[Finance/golf1|golf1]]'s surplus) — it was not a loss.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
