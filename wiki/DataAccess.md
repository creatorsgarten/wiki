:::lead
Some of our website data is stored on MongoDB (most of the rest is [[public by default|public]] and stored in {% render 'GitHub', repo: 'creatorsgarten/wiki' %}) repo. Since this data can contain personal information, only core maintainers have full access to it.
:::

# Stored data

## User data

When you log in to the website, our website stores the following data about you:

- **Your profile information** as provided by Eventpop. This includes:

  - Name
  - Email
  - Profile picture
  - User ID

- **Associated accounts** if you have linked your GitHub and/or Discord account to your profile. This includes:

  - Your username
  - Your user ID

# Querying data

_This section is for core maintainers._

Only core maintainers have full access to the database. Data can be queried multiple ways:

- **Directly from the database:** Use a MongoDB client to query the database directly, such as MongoDB Compass, VS Code, or DataGrip.

- **Via Metabase:** We have a Metabase instance set up to query the database more easily. Find the URL in Deploys.app console.

## Common tasks

- **Querying user data:** Go to Metabase &rarr; **Our analytics** &rarr; **Search users**. You can search for users by ID, name, email, GitHub username, or Discord username.
