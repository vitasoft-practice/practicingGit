import React from 'react';

export type HeaderProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Header({ text }: HeaderProps) {
  return (
    <div>
      {text}
    </div>
  );
}
