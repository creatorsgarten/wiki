:::lead
The **organizer notes** section is a place to store information about the event which may not be relevant to the attendees, but can be made public. By making information [[public by default]], it becomes easier for organizers to [[reachability|reach]] this information, and interested people can see how an event is organized.
:::

- **Purpose:** Document internal planning information, learnings, and processes for future reference
- **Content:** PR timelines, logistics, retrospectives, and organizational details
- **Not here:** final income and expenses live in [[Finance]], one page per event
- **Transparency:** Made public to share knowledge and improve future event organization
- **Naming:** Use the event slug (lowercase) for organizer notes page names

# Creating Organizer Notes

## When to Create

- **During planning:** Start early to track decisions and timelines
- **During execution:** Document issues, changes, and real-time learnings
- **Post-event:** Capture retrospectives; file final figures under [[Finance]]

## What to Include

- Budgets and planning estimates (final figures go in [[Finance]])
- PR and marketing timelines
- Key decisions and their rationale
- Problems encountered and solutions
- Lessons learned and future improvements
- Resource links (photos, documents, tools)

# Template Structure

{% raw %}

```markdown
{% render 'EventBox', name: ref %}

# Important Links

- [Resource 1] - [URL]
- [Resource 2] - [URL]
- [Resource 3] - [URL]

# Status

| Item           | Status                     |
| -------------- | -------------------------- |
| [Task/Item]    | ✅ / ⚠️ / ❌ [Description] |
| [Another Task] | ✅ / ⚠️ / ❌ [Description] |

# Activity Log

| Date       | Activity                        |
| ---------- | ------------------------------- |
| YYYY-MM-DD | [Description of what happened]  |
| YYYY-MM-DD | [Another milestone or decision] |

# Agenda/Timeline (if applicable)

| Time  | Event               |
| ----- | ------------------- |
| HH:MM | [Event description] |
| HH:MM | [Another event]     |
```

{% endraw %}

# Financial Tracking

Final income and expenses are **not** recorded here — they live in [[Finance]],
one page per event, generated from the ledger. See [[Finance]] for the front
matter schema and the conventions for carrying funds between events.

Organizer notes may still carry planning budgets, quotes and running estimates.

# Status Tracking

## Status Table Format

Use status indicators to track progress on key items:

```markdown
| Item     | Status         |
| -------- | -------------- |
| Venue    | ✅ Confirmed   |
| Food     | ⚠️ In progress |
| Sponsors | ❌ Not started |
```

## Common Status Indicators

- **✅** - Completed/Confirmed
- **⚠️** - In progress/Needs attention
- **❌** - Not started/Blocked

# Useful Links Section

## Essential Resources

Document links to key resources used during organization:

### Planning Resources

- **Notion workspace** - Main planning hub
- **Figma designs** - Visual assets and layouts
- **Google Drive** - Document storage
- **Airtable** - Data management

### Event Assets

- **Photo albums** - Event photography
- **Video recordings** - Talks, highlights
- **Live streams** - Broadcast archives
- **Social media** - Posts and engagement

### Tools and Services

- **Registration platform** - Eventpop, etc.
- **Communication tools** - Discord, Slack
- **Payment systems** - Banking, transfers
- **Vendor contacts** - Suppliers, venues

# Activity Logs

## Timeline Format

Document key decisions and milestones chronologically:

```markdown
| Date       | Activity                                             |
| ---------- | ---------------------------------------------------- |
| 2024-MM-DD | [What happened, decision made, or milestone reached] |
```

## Common Activity Types

- **Planning milestones** - Team formation, venue confirmation, date setting
- **Public announcements** - Event reveals, ticket releases, calls for participation
- **Logistics updates** - Sponsor confirmations, venue changes, timeline adjustments
- **Development progress** - Website launches, system implementations
- **Team activities** - Meetings, planning sessions, collaborative work

# Examples and References

## Different Types of Organizer Notes

### Competition/Contest Events

- [[OrganizerNotes/wind2]] - Status tracking, agenda, challenge creation guidelines
- [[OrganizerNotes/bac]] - Activity log, fact sheet, goals, status table
- [[OrganizerNotes/wind]] - Detailed event timeline based on livestream recording

### Conference Events

- [[OrganizerNotes/javascriptbangkok2]] - Organizer onboarding, activity log, collaboration tools

### Planning/Future Events

- [[OrganizerNotes/sht9]] - Task lists, brainstorming, planning structure
- [[OrganizerNotes/market]] - Tentative plans, timeline, TODO items

### Workshop/Meetup Events

- [[OrganizerNotes/creativecodingmeetup]] - Process checklists, key learnings, organizer lists

### Hackathon Events

- [[OrganizerNotes/sht6]], [[OrganizerNotes/sht7]] - Comprehensive event timelines and rundowns

## Common Content Patterns

- **Important Links** - Figma, Outline, project management sheets, collaboration tools
- **Status Tracking** - Tables showing progress on venue, food, sponsors, prizes
- **Activity Logs** - Chronological timeline of decisions and milestones
- **Event-Specific Content** - Challenge guidelines, onboarding instructions, fact sheets
- **Planning Elements** - Task lists, agendas, tentative plans

# Events with organizer notes

{% render 'SubpageList', of: ref %}
