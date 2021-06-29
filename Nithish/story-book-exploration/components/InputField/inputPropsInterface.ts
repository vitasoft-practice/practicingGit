import { Dispatch, SetStateAction } from "react";

export default interface InputpropsInterface {
    placeholder: string,
    color: string,
    borderColor: string,
    value: string,
    onchange: Dispatch<SetStateAction<string>>
}