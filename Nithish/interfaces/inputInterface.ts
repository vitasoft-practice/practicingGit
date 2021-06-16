import { Dispatch, SetStateAction } from "react";
interface inputInterface{
    placeholder: string,
    value?: string,
    type: string,
    border: string,
    onstate: Dispatch<SetStateAction<string>>

}
export default inputInterface;