:::lead
At Creatorsgarten, we use various tools to streamline our event organization process, enhance collaboration, and maintain our knowledge base. Following our [[public by default]] principle, we've documented the tools that help us connect creators and make events happen efficiently.
:::

# Collaboration Tools

Here are the tools we use for effective team communication and knowledge management:

- [Outline](#outline) - Internal wiki for team documentation
- [Wiki](#wiki) - Public knowledge base
- [Rallly](#rallly) - Meeting and event scheduling
- [Grist](#grist) - Data organization and management
- [Working Groups](#working-groups) - Team organization system

## Outline

![](https://usercontent.creatorsgarten.org/c/v1746034295/644c35a6802c02345887f156/image_qsb1vy.webp)

- Internal wiki powered by [Outline](https://www.getoutline.com/) with single sign-on via Creatorsgarten accounts
- Team members can simply log in with their Creatorsgarten.org accounts and be automatically added to the team workspace
- Team members can be invited to collaborate inside Outline effortlessly without having to ask for email addresses
- Similar to Notion in functionality
- Used for:
  - Private notes
  - Meeting notes
  - Internal documents
  - Sponsor information that needs to be shared externally
- Features real-time collaboration
- To access, go to your **Dashboard** then select **Outline**

## Wiki

![](https://usercontent.creatorsgarten.org/c/v1746034235/644c35a6802c02345887f156/21167ffe-4216-4c2a-8e9c-a8814713dd2b_javo8c.webp)

- Our public knowledge base that follows the [[public by default]] principle
- Powered by [Contentsgarten](https://github.com/creatorsgarten/contentsgarten), our custom wiki engine
- Used for long-term storage of event information
- We document:
  - Event details and agendas
  - [[Feedback]] from attendees
  - Media coverage
  - Public organizer notes
  - FAQ pages
  - Post-event documentation
- To access, go to **Wiki** section

## Rallly

![](https://usercontent.creatorsgarten.org/c/v1746034327/644c35a6802c02345887f156/image_dovlmk.webp)

- Scheduling tool for team coordination powered by [Rallly](https://rallly.co/)
- Used to create polls to find the best date and time for all participants
- Helps simplify the process of scheduling meetings and events
- To access, go to your **Dashboard** then select **Rallly**

## Grist

![](https://usercontent.creatorsgarten.org/c/v1746034372/644c35a6802c02345887f156/image_fzhuwd.webp)

- Spreadsheet-like database powered by [Grist](https://getgrist.com/) for storing event information in tabular format
- Provides a simple API to access the data
- See the [[Grist]] page for more details
- To access, go to your **Dashboard** then select **Grist**
  - Note that when you first sign in to Grist, you will not have any access until you get invited into a workspace
  - Check out the [Grist] page for how to request access

We use Grist in multiple ways:

- As a database to track financial information and sponsorships
- To store project submissions, team information, and leaderboards for hackathons
- As a backend database for custom web applications that integrate with [[Authgarten]]
- Allows participants to sign in and interact with event data
- We also use it to track our [[Inventory]] of equipment and assets

## Working Groups

![The image displays a list of members in a working group, including their names and profile pictures, against a plain white background.](https://usercontent.creatorsgarten.org/c/v1746034411/644c35a6802c02345887f156/image_om8csp.webp)

- A system to maintain a directory of people involved in organizing an event
- Provides a centralized system for member information and collaboration
- Makes it easier to coordinate tasks and access resources
- When a team member joins a working group, they share email addresses they use for various services (e.g., Figma, Google account)
- This makes sharing files via Google Drive, calendar invites via Google Calendar, or designs/FigJams in Figma much easier - we know exactly which email to use
- Can be either:
  - Event-specific working groups (temporary teams for specific events)
  - Initiative-based working groups (ongoing teams providing specific services)
- Helps with information centralization, access management, and defining responsibilities
- See the [[WorkingGroups]] page for more details

# Event Promotion

Tools that help us promote and manage our events:

- [Thai Tech Calendar](#thai-tech-calendar) - Public calendar for tech events
- [Social Media Accounts](#social-media-accounts) - Event marketing
- [Eventpop](#eventpop) - Registration and ticketing
- [Eventpop Check-in App](#eventpop-check-in-app) - On-site attendee management

## Thai Tech Calendar

- A public calendar open to anyone, inside and outside Creatorsgarten
- We mark tentative events as [TBC] to let other organizers know we intend to host an event
- Helps with coordination across the tech community
- See the [[ThaiTechCalendar]] page for more details

## Social Media Accounts

- For event promotion, we grant access to our social media accounts to team members in charge of PR
- Follows our decentralized approach to event organization
- See [[DigitalPresence]] for more details

## Eventpop

- Our primary event registration and ticketing platform powered by [Eventpop](https://www.eventpop.me/)
- The person in charge of event registration is given access to the Creatorsgarten Eventpop organization
- Organizers can create events, ticket types, and manage registrations
- See our [[TicketingTips]] page for best practices on reducing no-show rates and effectively managing free event registrations

## Eventpop Check-in App

- Mobile application by [Eventpop](https://creators.eventpop.me/en/articles/3067981) used by staff to check in attendees on the day of the event
- Streamlines the registration process

# Developer Platform

Technical systems that power our custom event applications:

- [Authgarten](#authgarten) - Authentication system

## Authgarten

- Our central authentication system that implements the OpenID Connect protocol
- Event organizers can use Authgarten to:
  - Authenticate Creatorsgarten members in event-specific applications
  - Access additional user information with proper consent (like email or ticket information)
  - Easily integrate with frameworks like Next.js and Express
- Particularly useful when building custom event platforms that need to verify attendee status or collect project submissions
- See the [[Authgarten]] page for detailed integration instructions
