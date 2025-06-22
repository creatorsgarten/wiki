:::lead
A **working group** represents a group of people who work together to organize events, manage initiatives, or provide specific services within Creatorsgarten.
:::

:::note
Working groups are actively used for event organization. The system continues to evolve based on organizer needs and feedback.
:::

# Overview

Working groups are an organizational structure designed to streamline collaboration within Creatorsgarten. They provide a centralized system for member information, making it easier to coordinate tasks and access resources when organizing events or running ongoing initiatives.

## Types of Working Groups

Working groups at Creatorsgarten generally fall into two categories:

1. **Event-specific working groups** - Formed temporarily to organize a specific event, following the process described in [[HowWeRunEvents]]. These are typically time-limited and disband after the event is completed.

2. **Initiative-based working groups** - More permanent teams that provide ongoing services or maintain specific functions within Creatorsgarten, such as [[Livegarten]] for livestreaming events.

## Purpose and Benefits

The working group system aims to solve several common challenges:

- **Information Centralization** - Consolidate member contact information in one place, rather than scattered across multiple platforms
- **Access Management** - Simplify the process of inviting the right people to collaboration tools (Figma, Google Drive, etc.)
- **Clear Responsibilities** - Make it easier to see who is working on what and their roles
- **Onboarding** - Streamline the process of bringing new members into a team or initiative
- **Self-Management** - Allow members to update their own profiles and contact information

# Creating a Working Group Page

To document a working group:

1. **Create a page** at `WorkingGroups/<event-slug>.md` or `WorkingGroups/<initiative-name>.md`
2. **Use the template** below as a starting point
3. **Link to the event** or initiative the group supports

## Template

{% raw %}

```markdown
{% render 'EventBox', name: ref %}

This working group works on {% render 'Event', name: '<event-slug>' %}

# Purpose

[Description of the working group's goals and responsibilities]

# Resources

[Links to shared resources, tools, and documents]
```

{% endraw %}

# Joining a Working Group

To join a working group, you'll need an invite link from a group admin. When joining, you'll share relevant profile information with the group, such as:

- Full name, nick name
- Contact emails and usernames for various services (Figma, Google Drive, etc.)

This shared information makes it easier for group members to collaborate effectively.

# Working Groups List

{% render 'SubpageList', of: ref %}
