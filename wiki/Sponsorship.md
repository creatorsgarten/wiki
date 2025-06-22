:::lead
This page documents how to create and manage **sponsorship proposals** for Creatorsgarten events. Sponsorship pages help organizers secure funding and resources while providing clear information to potential sponsors.
:::

- **Purpose:** Sponsorship pages serve as formal proposals to attract event sponsors
- **Structure:** Each event typically has its own sponsorship page in the `Sponsorship/` directory
- **Content:** Information about the event, sponsorship packages, benefits, and contact details
- **Naming:** Use the event slug (lowercase) for the sponsorship page name

# Creating a Sponsorship Page

To create a new sponsorship page:

1. **Create the page** at `Sponsorship/<event-slug>.md`
2. **Use the template** provided below as a starting point
3. **Customize** the content for your specific event
4. **Review** existing sponsorship pages for inspiration

## Basic Template

{% raw %}

```markdown
{% render 'EventBox', name: ref %}

# About [Event Name]

[Brief description of the event, its purpose, and what makes it special]

## Event Details

- **Date:** [Event dates]
- **Venue:** [Location]
- **Participants:** [Expected number]
- **Format:** [Event format description]
- **Attendance fee:** None (or specify if applicable)

# Sponsorship Packages

## [Tier 1 Name] (฿X,XXX or more)

[Description of top tier benefits]

Benefits include:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]

## [Tier 2 Name] (฿X,XXX or more)

[Description of mid tier benefits]

Benefits include:
- [Benefit 1]
- [Benefit 2]

## Individual Sponsorship

[Description of individual sponsorship]

Benefits include:
- [Benefit 1]
- [Gratitude statement]

# Non-Monetary Sponsorship

[Description of non-monetary sponsorship options]

## Prize Pool

[Guidelines for prize contributions]

# Budget Information

[Optional: Budget breakdown or estimates]

# Contact

[Contact information for sponsorship inquiries]
```

{% endraw %}

# Common Sponsorship Tiers

## Tier Naming Conventions

Events often use creative Thai-inspired names for sponsorship tiers:

- **Premium Tier:** "I'm Rich™️", "Graab", "กราบ" (฿5,000-8,000+)
- **Mid Tier:** "Waii", "ไหว้" (฿3,000-5,000)
- **Individual:** "Individual Sponsorship", "บุคคล" (any amount)

## Common Benefits by Tier

### Premium Tier Benefits
- Logo on website hall of sponsorship
- Logo on event posters and materials
- Social media promotion
- Speaking opportunity at event
- Thank you posts on social media

### Mid Tier Benefits
- Logo on website
- Logo on event materials
- Shoutout during event
- Social media mentions

### Individual Benefits
- Name listing on website
- Thank you acknowledgment
- Gratitude from organizers

# Sponsorship Types

## Monetary Sponsorship

**Cash contributions** that help cover event costs such as:
- Venue rental
- Food and beverages
- Equipment
- Prizes
- Materials and swag

## Non-Monetary Sponsorship

**In-kind contributions** including:

### Item Sponsorship
- Event materials and supplies
- Prizes for participants
- Swag and merchandise
- Equipment (laptops, hardware, etc.)

### Service Sponsorship
- Venue provision
- Food and catering
- Transportation
- Technical services

### Prize Pool Contributions
- Hardware and gadgets
- Gift cards and vouchers
- Books and learning materials
- Unique or quirky items (for stupid hackathons)

# Budget Guidelines

## Typical Event Costs

### Food & Beverages
- **Meals:** ฿150-200 per person per meal
- **Snacks:** ฿50-100 per person
- **Beverages:** ฿30-50 per person

### Materials & Swag
- **T-shirts:** ฿100-150 per shirt
- **Stickers:** ฿20-50 per person
- **Name tags:** ฿20-30 per person

### Venue & Equipment
- **Venue:** Varies by location and duration
- **Equipment rental:** ฿1,000-5,000
- **Decorations:** ฿500-2,000

# Contact Templates

## For Facebook Contact
```
Please contact us at [our Facebook page](https://grtn.org/fb)
```

## For Direct Messenger
```
Contact via Messenger: [Name] <https://m.me/[username]>
```

## For Forms
```
For [sponsorship type], check out our form: [form URL]
```

# Best Practices

## Content Guidelines
- **Be specific** about event details and expectations
- **Clearly outline** benefits for each sponsorship tier
- **Provide context** about the community and past events
- **Include contact** information prominently
- **Update regularly** as event details change

## Design Considerations
- **Use consistent** formatting with other sponsorship pages
- **Include visual** elements like logos and images when available
- **Make benefits** easy to scan and understand
- **Highlight** unique value propositions

## Communication
- **Respond promptly** to sponsor inquiries
- **Follow up** on commitments and deliverables
- **Thank sponsors** publicly and privately
- **Document** agreements and expectations clearly

# Examples

For reference, see existing sponsorship pages:
- High-budget events: [[Sponsorship/sht7]], [[Sponsorship/sht8]]
- Mid-budget events: [[Sponsorship/golf1]], [[Sponsorship/bac]]
- Corporate sponsorships: [[Sponsorship/sht6]]

# Transparency

All sponsorship income and expenses should be tracked transparently:
- Document all contributions received
- Track how funds are used
- Share financial summaries when appropriate
- Maintain public records of sponsor acknowledgments