---
statementOfActivities:
  income:
    - label: Corporate Sponsors
      amount: 118444.44
    - label: Individual Sponsors
      amount: 5672.88
    - label: Donations
      amount: 2191
    - label: Forfeited Attendance Deposit
      amount: 1800
    - label: Carried forward from sht8
      amount: 1648.11
  expenses:
    - label: Venue
      amount: 53500
    - label: Food and Beverage
      amount: 33392
    - label: Prize
      amount: 24145.68
    - label: Swag
      amount: 8363
    - label: Props
      amount: 2089
    - label: Parking
      amount: 2020
    - label: Ticketing Platform
      amount: 1230
    - label: Accommodation
      amount: 1156.02
    - label: Equipment
      amount: 1018
    - label: Transportation
      amount: 909.6
---

{% render 'EventBox', name: ref %}

:::lead
Final income and expenses for {% render 'Event', name: ref %}, closing a surplus of ฿1,933.13.
:::

{% render 'StatementOfActivities', data: page.statementOfActivities %}

# Notes

Opened with ฿1,648.11 carried forward from [[Finance/sht8|sht8]]. Closed ฿1,933.13 up; that balance remains in the event account.

Attendance deposits are shown net: ฿19,200 was collected and ฿17,400 refunded, so only the ฿1,800 forfeited is counted as income.

**Source:** the sht9 event book (Grist), which GrtnFi does not cover. Figures are final unless the ledger is amended.

<!-- For AI agents: these figures are generated from the ledger, not hand-entered.
     If they disagree with the ledger, the ledger wins - re-export rather than editing here. -->
