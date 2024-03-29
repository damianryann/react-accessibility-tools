# React Accessibility Tools

This project's github pages and local demo were bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) ![Unit Tests](https://github.com/PenguinOfWar/bagofholding/workflows/Unit%20Tests/badge.svg)

## Security

This monorepo manages multiple individual micro packages using Lerna. These micro packages are designed to be simple enough to fit on one screen of code. No compilation or mutation is provided to the source code before the package is deployed so what you see is what you get.

Each micro package strives to be free of any other dependencies. Any package with a dependency will specifically mention the direct dependecies on the individual package readmes.

Dependencies will also be listed in this document and on the GitHub page.

The end user is responsible for necessary polyfills or bundler/loader dependencies.

## Current Dependencies

### None

## Demos & Examples

### HeaderElement

**Available Props:**

| Name           | Type      | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| `isFunctional` | `Boolean` | **Required.** Is the element a header or a div class.                             |
| `heading`      | `String`  | **Required.** What header is it? h1 - h6 / p.                                     |
| `fallBack`     | `String`  | **Required.** The header you wish to fall back on should no value exist (h1 - h6) |
| `children`     | `String`  | **Required.** The title of your header.                                           |
| `className`    | `String`  | Add additional classes for styling.                                               |
| `id`           | `String`  | Add an ID for behaviours such as anchors.                                         |
| `style`        | `Object`  | Use inline styling should you need to dynamically add CSS.                        |

```js
import React from "react";
import HeaderElement from "react-accessibility-tools";

const ComponentName = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HeaderElement
            isFunctional={true}
            header="h1"
            fallBack="h2"
          >
            Hello world
          <HeaderElement/>
        </div>
      </div>
    </div>
  );
};

export default ComponentName;
```

```js
import React from "react";
import HeaderElement from "react-accessibility-tools";

const Text = (props) => {
  const { data = {} } = props;
  const { isFuncitonal, title, titleHeader, fallBack, id } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HeaderElement
            isFunctional={isFuncitonal}
            header={titleHeader} // h1 - h6 / p
            id={id}
            fallBack={fallBack}
          >
            {title}
          <HeaderElement/>
        </div>
      </div>
    </div>
  );
};

export default Text;
```

### ImageElement

**Available Props:**

| Name             | Type      | Description                                                |
| ---------------- | --------- | ---------------------------------------------------------- |
| `src`            | `String`  | **Required.** Image source                                 |
| `alt`            | `String`  | Alt text for image                                         |
| `className`      | `String`  | Add additional classes for styling.                        |
| `id`             | `String`  | Add an ID for behaviours such as anchors.                  |
| `style`          | `Object`  | Use inline styling should you need to dynamically add CSS. |

```js
import React from "react";
import ImageElement from "react-accessibility-tools";

const Media = (props) => {
  const { data = {} } = props;
  const { thumbnail, id, altText } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ImageElement
            src={thumbnail}
            alt={altText} //if empty, output will display role="presentation"
            id={`${id}-thumbnail`}
            className="img-thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
```

## Support

Please create an issue in the [issue tracker](https://github.com/damianryann/react-accessibility-tools/issues) if you have a problem or need support. Please select the correct label when creating your issue (e.g. `help wanted` or `bug`).

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
