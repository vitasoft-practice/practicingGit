import React from "react";
import styles from "./form.module.scss";
import { PhoneInput } from "@company/scope.ui.phone-input";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { TextField, Select, MenuItem } from "@material-ui/core";
// import IntlTelInput from "react-intl-tel-input";

export type FormProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
};

export function Form({ text }: FormProps) {
  return (
    <div className={styles.form}>
      <form>
        <PhoneInput text="contact" />

        <IntlTelInput
  containerClassName="intl-tel-input"
  inputClassName="form-control"
/>
      </form>
      <br />
    </div>
  );
}
