import React from "react";
import styles from "./button.module.scss";
export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  importance?: "primary" | "secondary";
};

export function Button({ text, importance }: ButtonProps) {
  return (
    <div>
      <button className={styles.button} data-variation={importance}>
        {" "}
        {text}
      </button>
    </div>
  );
}
