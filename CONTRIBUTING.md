# Adding your APWorld to apworlds.jsonc

This is a guide for adding or editing your APWorld in the apworlds.jsonc file on the apworlds branch. If you are trying to contribute to the website, see  [Contributing to the website](#contributing-to-the-website) below.

### Getting started

To get started adding your apworld to the website, head over to [apworlds.jsonc](https://github.com/ap-repository/ap-repository.github.io/blob/apworlds/apworlds.jsonc), and editing the file directly on GitHub.

This will open a pull request, which you can then edit and submit for further approval by maintainers.

If your proposed change is not quite valid, we will fix what we can, but if you don't meet any of the minimum requirements, it will be denied.

### Adding your APWorld

For this guide, it is assumed you are familiar with JSON. If you are not, it might be helpful to read up on it [here](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON).

Adding your APWorld, there are a few rules we require everyone to adhere to, which are mostly the same as the Archipelago standards:

- The APWorld needs to be playable or otherwise currently in development. So basicly no dead unusable APWorlds.
- If your APWorld is not playable but in development, it needs to have playable set to false, and ongoing set to true.
- No unrated and/or 18+ games. This may change with community feedback.

That said, if you are adding your first APWorld to the list, you might want to take a look at the APWorld definitions, and how the other existing APWorlds are set up in [apworlds.jsonc](https://github.com/ap-repository/ap-repository.github.io/blob/apworlds/apworlds.jsonc).

Please make sure your proposed change is [*valid JSON*](https://jsonlint.com/), the branch is set to *apworlds* and not **main**, and most importantly, you meet the minimum requirements for any APWorld (see APWorld definitions).

We will not allow adding of APWorlds by third parties without *very clear* permission of the author(s). If you have an APWorld that you would like to be added to this list, please reach out to the author(s) instead and request them to add it themselves ideally, or get permission from them to add it.

### Altering your APWorld

Very similar with adding an APWorld, just make a pull request and change what you would like to change about your APWorld.

Again, no editing of APWorlds by third parties without *express* permission of the author(s). Ideally, request the author(s) to do it themselves.

# Contributing to the website

If you are looking to contribute to the website itself, I assume you know what you are doing and are familiar with the [React framework](https://react.dev/). If you are not, please make an issue instead.

Simply open a pull request with your proposed changes, and I will look over them and accept or deny them.

Please do not open pull request for new features unless there is an issue with approval for them. Same goes for bugs. If you found a bug, please open an issue first and wait for approval before doing a PR to fix it.
