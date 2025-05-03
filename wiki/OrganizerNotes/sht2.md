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

# Documents

- [Information for sponsors](https://paper.dropbox.com/doc/The-Stupid-Hackathon-Thailand-2-Information-for-Sponsors--B3CM7BH9WmWR~ehKJ5tRTeLsAg-a2r1HDTr5SKds5kbmXOzH)
- [Stupid balance tracking sheet](https://docs.google.com/spreadsheets/d/11QtOidKwo30pvibBgYHORpFkSNP9kZi7xnJmcsRGX6s/edit#gid=0)

# Financials

{% render 'StatementOfActivities', name: page.statementOfActivities %}