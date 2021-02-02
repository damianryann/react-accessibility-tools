# Sony Professional Accessibility Tools

A magical grab bag of useful tools for the discerning developer.

This project's github pages and local demo were bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) ![Unit Tests](https://github.com/PenguinOfWar/bagofholding/workflows/Unit%20Tests/badge.svg) ![GitHub Pages](https://github.com/PenguinOfWar/bagofholding/workflows/GitHub%20Pages/badge.svg)

## Why?

I hate repeating myself and common chunks of legacy code can be risky business down the line.

This repo probably isn't for you if you've found your way here randomly, but if any of the scripts or libraries here are useful to you a star is always appreciated.

## Security

This monorepo manages multiple individual micro packages using Lerna. These micro packages are designed to be simple enough to fit on one screen of code. No compilation or mutation is provided to the source code before the package is deployed so what you see is what you get.

Each micro package strives to be free of any other dependencies. Any package with a dependency will specifically mention the direct dependecies on the individual package readmes.

Dependencies will also be listed in this document and on the GitHub page.

The end user is responsible for necessary polyfills or bundler/loader dependencies.

## Current Dependencies

### None

## Demos & Examples

```js
import React from "react";
import HeaderElement from "react-header-element";

const ComponentName = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HeaderElement
            isFunctional={true}
            title="Hello World"
            value="h1"
            fallBack="h2"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
```

## Support

Please create an issue in the [issue tracker](https://github.com/sonyprofessional/accessibility/issues) if you have a problem or need support. Please select the correct label when creating your issue (e.g. `help wanted` or `bug`).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## License

MIT License
