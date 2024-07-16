:::lead
This page links to resources about our [events](/events).
:::

- This page is mainly for organizers and people who are looking for in-depth information about our events. If you’re a visitor just checking out our events, see our [Main events page](/events).
- **There are 2 main types of events.** Normal events and informal gatherings. For more information, see [Types of events](#types-of-events).
- **Curious how we run events?** Check out [[How we run events]].
- **Creating a new event page?** Jump to [Creating a new event](#creating-a-new-event).
- **Have an idea for new events?** Feel free to suggest them at {% render 'Grtn', path: 'ideas' %}, but please note that the idea board is mostly inactive.

# Types of events

- **Normal events** — Listed [below](#full-event-list) and in the main [events](/events) page.
- **Informal gatherings** — Events that requires very little preparation. They are documented separately in the [[informal gatherings]] page.

# Full event list

{% render 'EventTable' %}

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
  unlisted: true # Remove this line when event is ready
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
