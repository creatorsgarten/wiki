---
statementOfActivities:
  income:
    - label: Sponsorship
      amount: 72814.28
    - label: Bank Income
      amount: 2.15
  expenses:
    - label: Food and Beverage
      amount: 29500
    - label: Swag
      amount: 18120
    - label: Prize
      amount: 13889
    - label: Venue
      amount: 4840
    - label: Miscellaneous Expense
      amount: 199
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿6,268.43.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

The ฿6,268.43 surplus stayed in the `dtinth-sht3` account and was pooled with sht3's surplus; the combined ฿7,411.20 was transferred out on 2025-03-18 when that account was repurposed.

The event also kept a live [balance tracking sheet](https://docs.google.com/spreadsheets/d/11QtOidKwo30pvibBgYHORpFkSNP9kZi7xnJmcsRGX6s/edit#gid=0) in Google Sheets during the event.

**Source:** the GrtnFi double-entry ledger (see [[Finance]]). Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
