import React from "react";
import PropTypes from "prop-types";

export const headerOptions = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];

const HeaderElement = (props) => {
  const { title, isFunctional, value, fallBack, className, id, style } = props;

  if (
    !headerOptions.includes(String(value).toLowerCase()) &&
    !headerOptions.includes(String(fallBack).toLowerCase())
  ) {
    console.error(
      "Error: value or fallBack must contain the correct header value. Please refer to documentation."
    );
    return (
      <h1>
        Error: <code>value</code> / <code>fallBack</code> must contain the
        correct header value. Please refer to documentation.
      </h1>
    );
  }

  const HeaderElement = value ? value : fallBack;

  function addClassToDiv() {
    let classes = [HeaderElement];

    if (className) {
      classes.push(className);
    }

    return classes.join(" ");
  }

  function addClassToTag() {
    let tagClasses = (document.getElementsByTagName(
      HeaderElement
    ).className = className);

    return tagClasses;
  }

  function addId() {
    let tagIdToTag = (document.getElementsByTagName(HeaderElement).id = id);
    let tagIdToClass = (document.getElementsByClassName(HeaderElement).id = id);

    return tagIdToTag || tagIdToClass;
  }

  function addStyle() {
    let tagIdToTag = (document.getElementsByTagName(
      HeaderElement
    ).style = style);
    let tagIdToClass = (document.getElementsByClassName(
      HeaderElement
    ).style = style);

    return tagIdToTag || tagIdToClass;
  }

  const headerElementMarkup = isFunctional ? (
    <HeaderElement className={addClassToTag()} id={addId()} style={addStyle()}>
      {title}
    </HeaderElement>
  ) : (
    <div className={addClassToDiv()} id={addId()} style={addStyle()}>
      {title}
    </div>
  );

  return headerElementMarkup;
};

HeaderElement.propTypes = {
  title: PropTypes.string,
  isFunctional: PropTypes.bool,
  value: PropTypes.oneOf(headerOptions),
  fallBack: PropTypes.oneOf(headerOptions),
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};

export default HeaderElement;
