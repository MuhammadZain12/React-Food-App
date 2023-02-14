import React from "react";
import styles from "./Image.module.css";

function Image(props) {
  return <img src={props.src} className={styles.mainPic} />;
}

export default Image;
