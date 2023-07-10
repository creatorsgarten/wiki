# Main events page

:::lead
[&rarr; Click here to go to the main events page](/events/)
:::

# Types of events

:::Draft
- **Normal events**
- **Pathfinder events**
- **Recurring events**
- **Event series**
:::

# Suggesting an event

Ideas for new events can be suggested at {% render 'Grtn', path: 'ideas' %}.

# Creating a new event

To start a new event:

1. **Pick a slug for the event.** It should be all lowercase.
2. **Create a wiki page.** The page name should be `Events/<slug>`. You can use the following template as a starting point:

{% raw %}
```
---
image: https://user-images.githubusercontent.com/193136/236173173-755b513b-6398-46a7-9fcb-ced21153c094.png
event:
  name:
  location: TBA
  date: "YYYY-MM-DD"
  endDate: "YYYY-MM-DD"
  # site:
  # eventpopId:
  unlisted: true
  hosts:
    - Creatorsgarten
---

:::lead
To be announced
:::

{% render 'EventpopButton', id: page.event.eventpopId %}

{% render 'EventBox', name: ref %}
```
{% endraw %}

# Full event list

{% render 'EventTable' %}

# Hosting an event

See: [[HowToHostAnEvent]]