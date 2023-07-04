<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![Code Coverage][coverage-badge]
![MIT License][license-badge]
![semantic-release][semantic-badge]

</div>

## Table of Contents <!-- omit in toc -->

<!-- cspell:disable -->

- [Installation](#installation)
- [CONTRIBUTING](#contributing)
  - [Prerequisite](#prerequisite)
  - [Pull Request](#pull-request)
- [Code of Conduct](#code-of-conduct)
- [Documentation](#documentation)

<!-- cspell:enable -->

## Installation

```sh
$ npm add --save-dev @fullstacksjs/toolbox
```

or using yarn

```sh
$ yarn add --dev @fullstacksjs/toolbox
```

## CONTRIBUTING

Development of Codeit happens in GitHub, and we appreciate contributions. Learn
how you can help improving Codeit by reading the sections below.

### Prerequisite

- [volta][volta]
- [npm][npm] >= 9

### Pull Request

The FullstacksJS team is monitoring for pull requests. We will review your
pull request as soon as possible.

Before submitting a pull request, please make sure the following is done:

- Fork the repository and create your feature branch from dev.
- Run `npm install` to have all dependencies.
- To start development run `npm run test:watch`.
- Write tests in `src/<scope>/<name>.test.ts` and implementation in `src/<scope>/<name>.ts`.
- Add the documentation page to the `docs/<scope>/<function>.mdx` and update `docs/<scope>/_meta.json` file.
- Ensure everything is ok `npm run verify`.

## Code of Conduct

[FullstacksJS Rules Page](https://fullstacksjs.com/rules)

## Documentation

Please check out the [documentation page](https://toolbox.fullstacksjs.com)

[logo]: https://raw.githubusercontent.com/fullstacksjs/toolbox/main/assets/logo.svg
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/toolbox?color=EF6969&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/toolbox?color=098FAA&label=VERSION&style=flat-square
[coverage-badge]: https://raw.githubusercontent.com/fullstacksjs/toolbox/main/assets/coverage.svg
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/toolbox?color=EA5F12&label=LICENSE&style=flat-square
[semantic-badge]: https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release&color=7E98F7&label=SEMANTIC&style=flat-square (https://github.com/semantic-release/semantic-release)
[nodejs]: https://nodejs.org/en/
[volta]: https://volta.sh/
[npm]: https://www.npmjs.com/
