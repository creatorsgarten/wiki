In most Creatorsgarten events, we use a form for collecting feedback after the event finished.

# Form Questions

1. What do you like about this event? What did you enjoy the most?

2. What are some things we can improve? What did you enjoy the least?

3. Is there anything we can try out next time? Any suggestions?

4. Please rate your experience in this event (on a scale from 1 to 10)

5. Say anything!!!

# Google Forms template

[&rarr; Feedback template on Google Forms](https://docs.google.com/forms/d/e/1FAIpQLScKIdMybaZNWKYhO5nOxzBgM-YzPagF27qlTJarVe3yvHXKEg/viewform?usp=sf_link)

# Feedback Pages

{% assign subpages = ref | getsubpages -%}
{%- for subpage in subpages %}
- [[{{subpage.ref}}]]
{%- endfor -%}