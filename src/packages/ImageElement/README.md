### ImageElement

**Available Props:**

| Name             | Type      | Description                                                |
| ---------------- | --------- | ---------------------------------------------------------- |
| `hideFromReader` | `Boolean` | Is the image alt text decoration but needed for SEO?       |
| `src`            | `String`  | **Required.** Image source                                 |
| `alt`            | `String`  | Alt text for image                                         |
| `className`      | `String`  | Add additional classes for styling.                        |
| `id`             | `String`  | Add an ID for behaviours such as anchors.                  |
| `style`          | `Object`  | Use inline styling should you need to dynamically add CSS. |

```js
import React from "react";
import ImageElement from "react-accessibility-tools";

const MediaText = (props) => {
  const { data = {} } = props;
  const { ariaTrue, thumbnail, logicalName, altText } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <ImageElement
            src={thumbnail}
            alt={altText} //if empty, output will display role="presentation"
            id={`${logicalName}-thumbnail`}
            className="img-thumbnail"
            hideFromReader={ariaTrue} //only true if altText exists and bool toggled.
          />
        </div>
      </div>
    </div>
  );
};

export default MediaText;
```
