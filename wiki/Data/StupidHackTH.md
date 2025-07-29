---
events:
  - number: 1
    slug: "sht1"
    teams: 6
    tickets: null
    presenters: null
    rating: null
    income: "?"
    expense: "?"
    videoViews: "–"
    dropOffRate: "–"
  - number: 2
    slug: "sht2"
    teams: 30
    tickets: 97
    presenters: 71
    rating: 8.57
    income: 72816
    expense: 66548
    videoViews: "–"
    dropOffRate: "–"
  - number: 3
    slug: "sht3"
    teams: 23
    tickets: 105
    presenters: 74
    rating: 8.50
    income: 68644
    expense: 67501
    videoViews: 2526
    dropOffRate: "17%"
  - number: 4
    slug: "sht4"
    teams: 20
    tickets: 80
    presenters: 57
    rating: 9.44
    income: "?"
    expense: "?"
    videoViews: 736
    dropOffRate: "–"
  - number: 5
    slug: "sht5"
    teams: 22
    tickets: 139
    presenters: 76
    rating: 8.00
    income: "?"
    expense: "?"
    videoViews: 1019
    dropOffRate: "–"
  - number: 6
    slug: "sht6"
    teams: 15
    tickets: 105
    presenters: 71
    rating: 9.00
    income: 33332
    expense: 33332
    videoViews: 1665
    dropOffRate: "–"
  - number: 7
    slug: "sht7"
    teams: 33
    tickets: 174
    presenters: 122
    rating: 8.85
    income: 110720
    expense: 102311
    videoViews: "–"
    dropOffRate: "–"
  - number: 8
    slug: "sht8"
    teams: 25
    tickets: 150
    presenters: 72
    rating: 8.60
    income: 119923
    expense: 118274
    videoViews: 3918
    dropOffRate: "27%"
  - number: 9
    slug: "sht9"
    teams: 13
    tickets: 89
    presenters: 63
    rating: 9.40
    income: 129700
    expense: 127323
    videoViews: 5362
    dropOffRate: "7.4%"
---

This page keeps track of interesting metrics from each [[StupidHackTH|Stupid Hackathon]] event.

| Event | {% for event in page.events %}[{{ event.number }}](/event/{{ event.slug }}) | {% endfor %}
| ---- | {% for event in page.events %}---:| {% endfor %}
| Number of teams   | {% for event in page.events %}{{ event.teams }} | {% endfor %}
| Number of tickets | {% for event in page.events %}{% if event.tickets %}{{ event.tickets }}{% endif %} | {% endfor %}
| Number of presenters | {% for event in page.events %}{% if event.presenters %}{{ event.presenters }}{% endif %} | {% endfor %}
| Event rating | {% for event in page.events %}{% if event.rating %}[{{ event.rating }}](/wiki/Feedback/{{ event.slug }}){% endif %} | {% endfor %}
| Income | {% for event in page.events %}{% if event.income != "?" %}[{{ event.income }}](/wiki/OrganizerNotes/{{ event.slug }}){% else %}{{ event.income }}{% endif %} | {% endfor %}
| Expense | {% for event in page.events %}{% if event.expense != "?" %}[{{ event.expense }}](/wiki/OrganizerNotes/{{ event.slug }}){% else %}{{ event.expense }}{% endif %} | {% endfor %}
| Video views | {% for event in page.events %}{{ event.videoViews }} | {% endfor %}
| Drop-off rate | {% for event in page.events %}{{ event.dropOffRate }} | {% endfor %}

# Metrics

- **Number of teams**
    - Represents how many teams presented in the presentation session.
    - Collected by counting the number of presentations.
- **Number of tickets**
    - Represents how many tickets have been given out, not including observer tickets.
    - Collected by checking the number of tickets in Eventpop. This includes staff tickets.
- **Number of presenters**
    - Represents how many people ended up coming to the event and presented.
    - Collected by summing up the number of team members in each team found in the registration system.
- **Event rating**
    - Represents the average rating of the event.
    - Collected by averaging the score in the [[Feedback|feedback form]].
- **Income**
    - Total income for the event in Thai Baht.
    - Collected from sponsorship.
- **Expense**
    - Total expenses for the event in Thai Baht.
    - Includes venue, food, equipment, and other event costs.
- **Video views**
    - Number of views on the pitching livestream
- **Drop-off rate**
    - Percentage of registered hackathon participants who did not show up at the event.
    - Only includes hackathon participants; staff and observers are not counted.