# How to create a new page

To create a new page, go to `https://creatorsgarten.org/wiki/<YourPageName>` and start editing! The page name must be CamelCase.

# How to edit pages

- **Edit directly on the website:** Click on the “Edit this page :Icon{icon="pixelarticons:edit"}” button to start editing. It is optimized for making quick and small changes.

  :::tip
  On a wiki page, you can hit the `e` key to go to the Edit page.
  :::

  :::warning
  The editor is very rudimentary and not stable, so we recommend that you save your changes frequently to avoid conflicts and avoid losing your work.
  :::

- **Edit on GitHub:** All of the wiki contents is stored inside the {% render 'GitHub', repo: 'wiki' %} repository. This lets you manage the wiki contents using your favorite tools like VS Code or Obsidian. Changes will be reflected on the website in a few minutes.

- **Edit on Visual Studio Code for the Web:** [:Icon{icon="vscode-icons:file-type-vscode"} Click here to launch VS Code for the Web.](https://vscode.dev/github/creatorsgarten/wiki)

  :::tip
  On a wiki page, you can hit the `.` key to edit the page in Visual Studio Code for the Web.
  :::

# How to get notified of changes to the wiki

- [Join the **Creatorsgarten** Discord server](https://grtn.org/dc) and [follow the “Wiki change log” thread in the forum](https://discord.com/channels/931905227848818769/1132692201688793122), then you will receive notifications over Discord.

# Who can edit pages using the web editor

You can edit a page using the web editor if you meet all of these 3 conditions:

1. **You are logged in.** To log in, click the Login button at the top of the page, and sign in with Eventpop.

2. **You have a linked GitHub account.** To link your GitHub account, click the Dashboard button at the top of the page.

3. **You are in the `creatorsgarten` GitHub organization.** To join the GitHub organization, submit a pull request that adds your GitHub username to the [`index.ts` file in our configuration repository.](https://github.com/creatorsgarten/configuration/blob/main/index.ts) Once the PR has been approved and merged, you will get invited into the organization. Once you accept the invitation, you can edit the wiki pages directly from the website.

# What syntax is supported?

See [[Syntax]] page.