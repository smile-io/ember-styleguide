# Smile.io Ember style guide

A cutting edge approach for sharing configurations for different tools across ember projects ✨✨✨

## Installation

- Run `yarn install @smile-io/ember-styleguide`
- Run `yarn setup-smile-styleguide`

## Features

- An opinionated ESLint config
- Prettier support with [git hooks][1] to run prettier when staging git files
- Lint ember templates with [ember-template-lint][2]
- Lint sass files using [`stylelint`][3]

## IDE support

- [Prettier][4]
- [ESLint][5]
- [Stylelint][6]

## Gotchas

- If you're using vscode then add, `"[handlebars]": { "editor.formatOnSave": false },` to your `settings.json` file so that the default formatter isn't run on hbs files.

[1]: https://prettier.io/docs/en/precommit.html#option-4-precise-commits-https-githubcom-jameshenry-precise-commits
[2]: https://github.com/ember-template-lint/ember-template-lint
[3]: https://stylelint.io/
[4]: https://prettier.io/docs/en/editors.html
[5]: https://eslint.org/docs/user-guide/integrations
[6]: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins
