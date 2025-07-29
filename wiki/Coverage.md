:::lead
In many Creatorsgarten [events](/events), we collect media coverage and content created around our events and publish them here.
:::

- **Media Coverage:** We collect articles, blog posts, and social media posts that cover our events.
- **Photos & Videos:** Photos and videos taken during the events or promotional material for the events.
- **Write-ups:** Blog posts, articles, or reports written about our events, either by organizers, participants, or journalists.

# Coverage Categories

## Pre-event PR
Coverage that happens before the event, such as announcements, promotional posts, and press releases.

## Event Coverage
Content created during or after the event, including:

- **Photos:** Event photos shared on social media or on photography platforms
- **Videos:** Both official event videos and content created by participants
- **Reels/Shorts:** Short-form video content from platforms like TikTok, Instagram, Facebook
- **Write-ups:** Detailed articles, reports, or blog posts about the event
- **Media Coverage:** Articles or features in traditional or online media

# Coverage pages

{% render 'SubpageList', of: ref %}

# Creating Coverage Pages

## Template Structure

{% raw %}

```markdown
{% render 'EventBox', name: ref %}

# Live

- [Live stream title](URL) - Description
- [Another live stream](URL) - Description

# Write-ups

- ["Article Title" by Author Name](URL) - Brief description
- ["Another Article" by Another Author](URL) - Brief description

# Videos

- ["Video Title" by @username](URL) - Description
- [Official Event Video](URL) - Description

# Photos

- ["Photo Album Title"](URL) - Description
- [Official Event Photos](URL) - Description

# Code

- [Repository Name - description](GitHub URL)
- [Another Repository](GitHub URL)

# Documents

- [Document Title](URL) - Description
```

{% endraw %}

## Content Categories

### Live Streams
- **Official streams** - Main event broadcasts
- **Talks and sessions** - Individual presentation recordings
- **Behind the scenes** - Setup, networking, informal moments

### Write-ups
- **Participant blogs** - Personal experiences and reflections
- **Technical articles** - Deep dives into projects or topics
- **Media coverage** - News articles and press coverage
- **Organizer reflections** - Behind-the-scenes perspectives

### Videos
- **Event highlights** - Promotional or summary videos
- **Individual talks** - Recorded presentations
- **Project demos** - Participant showcases
- **Interviews** - Conversations with speakers or participants

### Photos
- **Official photography** - Professional event photos
- **Social media posts** - Instagram, Facebook, Twitter posts
- **Participant photos** - Community-shared images
- **Behind the scenes** - Setup, organization, candid moments

### Code Repositories
- **Event infrastructure** - Websites, registration systems
- **Participant projects** - Hackathon submissions, demos
- **Tools and utilities** - Supporting software and scripts

### Documents
- **Sponsor materials** - Calls for sponsorship, proposals
- **Press kits** - Media resources and information
- **Presentations** - Slides and supporting materials

## Attribution Standards

### Required Information
- **Author/Creator** - Who created the content
- **Platform/Source** - Where it was originally published
- **Date** - When it was created or published
- **Brief description** - What the content covers

### Format Examples
```markdown
- ["Article Title" by Author Name](URL) - Brief description of content
- [Video Title by @username](URL) - What the video shows or discusses
- [Photo Album Name](URL) - What events or moments are captured
```

### Crediting Guidelines
- **Use real names** when available and appropriate
- **Include social handles** for attribution (e.g., @username)
- **Link to original source** whenever possible
- **Respect privacy** - don't share private content without permission

# Contributing Coverage

If you have coverage items to add:

1. **Identify the event** - Find the appropriate page in `/Coverage` directory
2. **Choose the right category** - Live, Write-ups, Videos, Photos, Code, Documents
3. **Use proper attribution** - Include author, source, and description
4. **Follow the format** - Use the template structure above
5. **Create new pages** if needed - Follow existing page patterns

## Creating New Coverage Pages

When creating coverage for a new event:

1. **Use the event slug** - Name the file `Coverage/<event-slug>.md`
2. **Start with EventBox** - Always include `{% raw %}{% render 'EventBox', name: ref %}{% endraw %}`
3. **Organize by category** - Use the template sections above
4. **Link appropriately** - Reference the main event page
5. **Update regularly** - Add new coverage as it becomes available