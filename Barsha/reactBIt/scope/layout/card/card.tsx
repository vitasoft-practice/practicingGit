import React from "react";
import styles from "./card.module.scss";
import { Button } from "@company/scope.ui.button";

export type CardProps = {
  /**
   * a text to be rendered in the component.
   */
  title: string;
  desc: string;
  author: string;
};

export function Card({ title, desc, author }: CardProps) {
  const count = Math.round(Math.random() * 10);
  return (
    <div className={styles.card}>
      {title}
      <br />
      Description: {desc}
      <br />
      Author: {author}
      <br />
      <Button text="Like" importance="primary" />
      {count}
    </div>
  );
}
