:::lead
At Creatorsgarten, we handle finances in a flexible manner, adapting to the needs of each event. This page outlines our approaches to financial management.
:::

# Cashless Events

Most of our events operate on a cashless model:

- Sponsors provide venues, food, and other resources directly.
- No money passes through the organizers.
- This simplifies event organization and reduces financial complexity.

# Events with Financial Transactions

For events that require monetary handling (e.g., [[StupidHackTH|Stupid Hackathon Thailand]]), we employ the following strategies:

## Personal Account Management

- We don't have a central bank account for the collective.
- Event leaders often use their personal bank accounts to receive sponsorship money, although events with a larger team may appoint a dedicated treasury role.
- We recommend organizers create separate savings accounts for Creatorsgarten events to ease reconciliation.
- This approach allows for quick and easy handling of individual sponsorships.
- It's particularly suitable for events with informal sponsorship arrangements.

## Transparency and Balance Tracking

- For some events, we create public balance tracking sheets.
- These sheets show income, expenses, and current balance.
- We used Airtable and Google Sheets in the past, but we also have a new system built on top of [[Grist]] along with a [custom web application](https://github.com/creatorsgarten/GrtnFi) (under development) to streamline the process.
- This allows us to maintain transparency, benefiting sponsors, team members, and future organizers.
- Usage of this system is optional for organizers, as each event leader decides how they want to manage their event's finances.
- These public records align with our [[PublicByDefault|public by default]] principle, promoting transparency and trust within our community. [[PublicByDefault#financial-transparency|See this section for examples]].

## Partnerships with Organizations

- For some events, we partner with established organizations (companies, associations, or non-profits) to handle financial transactions.
- This approach allows for conventional accounting practices, including proper invoicing and receipt issuance.
- It's particularly beneficial for events seeking corporate sponsorships or requiring more formal financial management.

# Per-event financial statements

Final income and expenses for each event live in the `Finance/` namespace, one page
per event slug, e.g. [[Finance/sht9]]. These are **actuals** — what the event
turned out to cost. Forward-looking sponsorship packages live in [[Sponsorship]]
instead, and planning notes in [[OrganizerNotes]].

{% render 'SubpageList', of: ref %}

## Front matter schema

Each page carries a `statementOfActivities` block, rendered by the
`StatementOfActivities` template:

```yaml
statementOfActivities:
  income:
    - label: 'Sponsorship'
      amount: 1234.56
  expenses:
    - label: 'Food and Beverage'
      amount: 1234.56
```

Amounts are Thai baht, to two decimal places. Labels follow the ledger's own
account names so that a page can be regenerated from the ledger without a mapping
step. Common expense labels: Food and Beverage, Venue, Accommodation, Prize, Swag,
Props, Equipment, Transportation, Parking, Ticketing Platform, Miscellaneous
Expense.

These pages are **generated from the ledger, not hand-maintained**. If a page and
the ledger disagree, the ledger is correct — re-export rather than editing the
page, and record where the figures came from in a **Source** line at the bottom.

## Carrying funds between events

Creatorsgarten has no central account, so an event's closing balance stays in
whichever organizer's account held it and is often used to seed a later event.
Two conventions keep this legible:

- Where a carry-forward is recorded as a transaction, it appears as an income line
  on the receiving event (for example, [[Finance/sht9]] opens with ฿1,648.11
  carried forward from [[Finance/sht8]]).
- Where an event spends more than it raised because earlier leftovers covered the
  gap, the statement shows the real shortfall and the Notes section explains what
  funded it. [[Finance/wind2]] is the worked example — a ฿7,974.00 gap covered from
  pooled funds, not a loss.

Never balance a statement with an invented line item. A shortfall that was really
covered from elsewhere is more useful to a future organizer than a tidy zero.

# Prior art

Example of organizations that make their finances public.

- OpenCollective: <https://github.com/opencollective/opencollective-api/tree/main/server/models>
- Hack Club: <https://hcb.hackclub.com/hq/transactions>
