import {Dispatch, SetStateAction} from "react";
interface Iprops{
    placeholder: string
    onstate: Dispatch<SetStateAction<string | undefined>>
}

export default Iprops;