import React from "react";
import { Button } from "./button";

export const BasicButton = () => <Button text="hello from Button" />;

export const PrimaryButton = () => {
  <Button importance="primary" text="I am a purple button" />;
};

export const SecondaryButton = () => {
  <Button importance="secondary" text="I am a danger button" />;
};
