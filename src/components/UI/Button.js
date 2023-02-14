import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styles from './Button.module.css'

function Button(props) {
  return (
    <button className={`${styles.btn} ${props.className}`} type={props.type || 'button'}>
      {props.children}
    </button>
  );
}

export default Button;
