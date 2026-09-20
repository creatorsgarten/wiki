---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 68644
  expenses:
    - label: Food and Beverage
      amount: 25145.95
    - label: Venue
      amount: 23821.28
    - label: Prize
      amount: 13844
    - label: Swag
      amount: 4690
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿1,142.77.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿1,142.77 surplus stayed in the `dtinth-sht3` account and was pooled with sht2's surplus; the combined ฿7,411.20 was transferred out on 2025-03-18 when that account was repurposed.

The event also kept a live [balance tracking sheet](https://stupidhackth3.notion.site/Stupid-Balance-Tracking-Sheet-f33d403a1db94bd8945525ccf452c2e0) in Notion during the event.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
