### HeaderElement

**Available Props:**

| Name           | Type      | Description                                                                       |
| -------------- | --------- | --------------------------------------------------------------------------------- |
| `isFunctional` | `Boolean` | **Required.** Is the element a header or a div class.                             |
| `value`        | `String`  | **Required.** What header is it? h1 - h6 / p.                                     |
| `fallBack`     | `String`  | **Required.** The header you wish to fall back on should no value exist (h1 - h6) |
| `title`        | `String`  | **Required.** The title of your header.                                           |
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

```js
import React from "react";
import HeaderElement from "react-accessibility-tools";

const StandardText = (props) => {
  const { data = {} } = props;
  const { isFuncitonal, title, titleHeader, fallBack } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <HeaderElement
            isFunctional={isFuncitonal}
            title={title}
            value={titleHeader}
            fallBack={fallBack}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardText;
```
