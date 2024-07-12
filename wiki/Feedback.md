:::lead
In most Creatorsgarten [events](/events), we use a form for collecting feedback after the event finished.
:::

- **Questions:** Most feedback forms have 5 questions, but there may be more or less, depending on event. See [Form questions](#form-questions) for the typical questions.
- **Tool:** We use Google Forms for collecting feedback. See [Google Forms template](#google-forms-template) for the template.
- **Public feedback:** Once the feedback is collected, we create a page for each event with the feedback. See [Feedback pages](#feedback-pages) for the list of feedback pages.
- **AI-generated summaries:** AI-generated summaries can be created to to make the result more digestible ([[Feedback/sht7|example]]). See [AI-generated summaries](#ai-generated-summaries) instructions for the prompt used.

# Form questions

1. What do you like about this event? What did you enjoy the most?

2. What are some things we can improve? What did you enjoy the least?

3. Is there anything we can try out next time? Any suggestions?

4. Please rate your experience in this event (on a scale from 1 to 10)

5. Say anything!!!

# Google Forms template

[&rarr; Feedback template on Google Forms](https://docs.google.com/forms/d/e/1FAIpQLScKIdMybaZNWKYhO5nOxzBgM-YzPagF27qlTJarVe3yvHXKEg/viewform?usp=sf_link)

# Feedback pages

{% render 'SubpageList', of: ref %}

# AI-generated summaries

With the help of large language models,, we can generate summaries for the feedback. The following prompt is used with [Claude 3.5 Sonnet](https://www.anthropic.com/news/claude-3-5-sonnet) to generate summaries for the feedback provided in the event feedback form:

```
You will be summarizing event feedback provided as an unordered list. Your task is to analyze the feedback, group similar comments, and create a summary in bullet point format.

Here is the feedback list:
<feedback_list>
{{FEEDBACK_LIST}}
</feedback_list>

If multiple people gave the exact same feedback, they are marked with (xN) at the end. For example "None (x10)" means that 10 people said "None".

For each question, follow these steps to summarize the feedback:

1. Carefully read through all the feedback items in the list.

2. Identify common themes or similar comments among the feedback items.

3. For each theme or similar comment, count how many people expressed that particular feedback.

4. Create bullet points summarizing each theme or similar comment using the format "N people said X", where N is the number of people who expressed that feedback and X is a concise summary of their comment, with keywords bolded using Markdown format. You can include some extra commentary if there are specific feedback, example, or someone said something noteworthy, but keep it relatively short, like no more than 15 words. DO NOT nest lists. Also N can be 1 representing an individual feedback.

5. Order the bullet points from mentioned by many people to mentioned by fewer people.

For each question, present your summary in the following format:
<summary question="question">
- [First bullet point]
- [Second bullet point]
- [Third bullet point]
[...continue with remaining bullet points...]
</summary>

Remember to focus on capturing the essence of the feedback and presenting it in a clear, concise manner. Your summary should give a quick overview of the most common and important feedback received about the event.
```
