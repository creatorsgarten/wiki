{% liquid
assign events = '{"match":{"event":true}}' | query_pages | sort: 'data.event.date' | reverse
assign eventCount = 0
for events as event
  unless event.data.unlisted
    assign eventCount = eventCount | plus: 1
  endunless
endfor
%}
# Summary

<div style="padding: 1rem; border: 2px solid #0003;">

Creatorsgarten is a collective of people, both professionals and students, who are united by our love for creating things. Since 2017, we have run over [{{eventCount}} community events](/events), which include meetups, hackathons, camps, and contests. Over 1,200 people attended our events, and over 3,000 people are following our events on [Facebook](https://grtn.org/fb). All of our events are free, thanks to the support of our sponsors and partners.

For more details about us and what we do, check out our website at [creatorsgarten.org](https://creatorsgarten.org/). Also check out our Facebook Page at [grtn.org/fb](https://grtn.org/fb).

</div>

# About

At its core, Creatorsgarten is a collective and meta-collective composed of creators from various backgrounds and professions.

The movement was initiated in 2017 by a group of programmers to organize "[[Events/sht1|The Stupid Hackathon Bangkok]]," which eventually evolved into "The Stupid Hackathon Thailand" team and community. From 2017 to 2021, "The Stupid Hackathon Thailand" held five annual Stupid Hackathons, two Hacktoberfest Thailand chapters, and several special events, such as "[[Events/ycc1|Young Creators' Camp]]," "[[Events/love|Data Driven Love]]," and "[[Events/codeplearn|Code Plearn.]]"

As the group expanded and hosted more events unrelated to the annual Stupid Hackathon Thailand, it became clear that the name was no longer fitting. Therefore, in the closing session of [[Events/sht6|the sixth Stupid Hackathon Thailand]], the group announced its new name, "Creatorsgarten", which, as a result, also create a more cohesive collective with a more well-defined objective and traits.

With a growing number of members across a diverse range of fields, Creatorsgarten decided to establish "[[Guilds]]" aligned with ongoing projects and member interests. The establishment of these guilds within Creatorsgarten has allowed for a more structured approach to projects and collaborations. Each guild has its own unique culture and persona, attracting members with specific interests and skillsets. However, an individual within Creatorsgarten collective may join multiple guilds based on their interests and contributions.

# Creatorsgarten Structure/Terminology (TO BE ADDED)
- Guilds
 - Internal Guilds
 - Working Groups
- Events
 - Regular
 - Pathfinder
 - Recurring
 - Series
- Projects
- Management/Meta
 - DRI/O
 - Join
 - Lore