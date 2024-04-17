{% render 'EventBox', name: ref %}

# Fact sheet

- Date and time: Saturday, May 18th, 2024
- Place: Agoda 8F
- Time: 18:30 ~ 23:00
- Confirmed sponsors:
    - Agoda
    - Cleverse

# Status

| Item | Status |
| ---- | ------ |
| Venue | ✅ Agoda |
| Date | ✅ Saturday, May 18th, 2024 |
| Food | ✅ Sponsored by Agoda |
| Prizes | ⚠️ 0 / 8 |
| Music | ⚠️ Still need someone to help play music during each round. It should be safe to stream the music to Twitch and Facebook without getting copyright strike. |
| Editor | ✅ Code editor is working now |
| Challenges | ⚠️ Still working on it |
| Authentication | ⚠️ Authgarten needs an event mode where people can sign in with their ticket reference code, in case a user needs to borrow someone’s laptop and their Eventpop account is tied to Facebook and they don’t want to input their Facebook credentials into someone else’s computer. |
| Voting system | ⚠️ Unimplemented |
| Quiz | ⚠️ Unimplemented |
| Quiz questions | ⚠️ Unprepared |

# Activity log

| Date | Activity |
| --- | --- |
| 2024-03-22 | Created messenger group |
| 2024-03-23 | [Announced intent to organize, call for staff](https://www.facebook.com/dtinth/posts/pfbid03zD1G36iy2Qtu4DU8tkidTi6fU13Gna1aSGQY83yRFpoWKqcFHxStCivFwNAcBQHl) |
| 2024-04-02 | Venue scoting, agenda drafting |

# Agenda

:::warning[Draft]
This agenda is a draft and is subject to change.
:::

| Time | Event |
| ---- | ----- |
| 18:00 | Registration |
| 18:30 | Opening |
| 18:45 | Round 0 (10 mins, testing) |
| 18:55 | Round 1 |
| 19:20 | Round 2 |
| 19:45 | Quiz to find more participants |
| 20:00 | Round 3 |
| 20:25 | Round 4 |
| 20:50 | Break |
| 21:00 | Final 1/2 |
| 21:25 | Final 2/2 |
| 21:50 | Photo |
| 22:00 | Prize awarding & closing |
| 22:15 | Networking |
| 23:00 | Venue closes |

# How to create a challenge

A challenge consists of:

- **An example reference.**
    - Made with code in Tailwind Play (just like participants).
    - Verified to be possible to implement within 10 minutes.
    - Will be made available after the event.
    - Viewport size is 540x720.
- **5 objectives.**
    - An objective is binary (either completed or not completed), no partial scoring.
    - Should be objectively verifiable.
    - Available in both Thai and English.
    - Any text used in the reference should be present in the objective text. During the event, they will be provided as a text that participants can copy and paste.
- **Optional image assets.**
    - URLs to the assets will be provided.

For examples, see the past challenges in [Code in the Wind #1](https://showdown.space/events/code-in-the-wind-1/#challenges).

## Challenge creation steps

Note that you don’t have to do all the steps yourself. You can share your idea in messenger group first, and we can collaborate on the challenge details together.

1. Prepare a reference mockup, maybe a screenshot or a design in Figma. Size is 540x720.
2. Prepare a rough set of 5 objectives.
3. Implement the reference code based on our [Tailwind Play template](https://play.tailwindcss.com/FHzQWBQZtr?size=540x720). Click the share button to get a link.
4. Create a new page in our private challenge library. Go to **Challenge Library**, click **New doc** at the top right and select **New nested document.**
5. Name the doc “[Difficulty] - [Name]”. If you are not sure of the difficulty, feel free to ask in group chat.
6. Paste in the Tailwind CSS link.
7. Click **Publish** at the top right.
8. Write the 5 objectives.
9. Translate the objectives to another language.

# Laundry list

- Create Eventpop event
- Create Facebook event
- Add event to techcal
- Update our editor fork to be up to date with upstream
- Update live system to be more friendly with offline event
- Switch from Discord auth to Authgarten
- Find a DJ to take care of music during the event? (be careful about copyright)


