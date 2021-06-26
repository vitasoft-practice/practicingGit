import { Dispatch, SetStateAction } from "react";

export interface InputPropsInterface {
    borderColor: string,
    value: string,
    disabled?: boolean,
    placeholder: string,
    type: string,
    textColor: string,
    placeholderColor: string,
    onstate: Dispatch<SetStateAction<string>>
}