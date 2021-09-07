import React from "react";
import styles from "./column.module.scss";
import { Card } from "@company/scope.layout.card";
export type ColumnProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Column({ text }: ColumnProps) {
  return (
    <div className={styles.columnContainer}>
      {text}
      <br />
      <Card
        title="React with Typescript"
        desc="front-end framework"
        author="Nate Murray"
      />

      <Card
        title="React with Typescript"
        desc="front-end framework"
        author="Nate Murray"
      />
      <Card
        title="React with Typescript"
        desc="front-end framework"
        author="Nate Murray"
      />
    </div>
  );
}
