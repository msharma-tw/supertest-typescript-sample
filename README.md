# API tests with Jest and SuperTest
This project is an example of API tests using TypeScript, [Jest](https://jestjs.io/docs/en/getting-started) and [SuperTest](https://github.com/visionmedia/supertest).  
We are using [FakeRestAPI.Web](https://fakerestapi.azurewebsites.net/swagger/ui/index#!/Books/) as a system.

## Features

-   TypeScript
-   Jest
-   SuperTest
-   [Commit lint](https://github.com/conventional-changelog/commitlint) and [Commitizen](https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly)
-   ESlint
-   Prettier
-   Husky
-   Github Actions
-   [Jest HTML Reporter](https://github.com/dkelosky/jest-stare) on [Github Pages](http://warleygabriel.github.io/api-tests-jest-supertest-example)

## Requirements

-   node >= 12.x - [how to install Node](https://nodejs.org/en/download/)
-   npm >= 6.14.x - [how to install NPM](https://www.npmjs.com/get-npm)

## Getting Started

Install the dependencies:

```bash
yarn install
```

Compile TypeScript:

```bash
yarn run build
```

Run api tests:

```bash
yarn run test
```

```text
 PASS  dist/test/specs/first.spec.js (6.771 s)
  Managing books
    ✓ /GET - Get users at page 2 (1096 ms)
    ✓ /POST - Create new user (1217 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        9.86 s
Ran all test suites matching /.\/dist\/test\/specs\/first.spec.js/i.
```

## Watch mode

We also have watch mode for Jest and TypeScript:

```bash
npm run build:watch
npm run test:watch
```

## Prettier and Eslint

Run to format the code:

```bash
npm run code:format
```

