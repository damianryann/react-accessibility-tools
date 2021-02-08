import React from "react";
import PropTypes from "prop-types";

const ImageElement = (props) => {
  const { src, alt, hideFromReader, className, id, style } = props;

  function addClass() {
    let classToImg = (document.getElementsByTagName(
      "img"
    ).className = className);

    return classToImg;
  }

  function addId() {
    let idToImg = (document.getElementsByTagName("img").id = id);

    return idToImg;
  }

  function addStyle() {
    let styleToImg = (document.getElementsByTagName("img").style = style);

    return styleToImg;
  }

  function addAriaHidden() {
    if (hideFromReader) {
      let ariaToImg = (document.getElementsByTagName("img").ariaHidden =
        "true");

      return ariaToImg;
    }
  }

  const imageElementMarkup = !alt ? (
    <img
      src={src}
      role="presentation"
      className={addClass()}
      id={addId()}
      style={addStyle()}
      alt=""
    />
  ) : (
    <img
      src={src}
      className={addClass()}
      id={addId()}
      style={addStyle()}
      alt={alt}
      aria-hidden={addAriaHidden()}
    />
  );

  return imageElementMarkup;
};

ImageElement.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  hideFromReader: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};

export default ImageElement;
