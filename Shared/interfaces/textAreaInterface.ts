import { Dispatch, SetStateAction } from 'react';

interface textAreaInterface {
    rows: number,
    cols: number,
    value: string,
    placeholder: string,
    name: string,
    id: string,
    onstate: Dispatch<SetStateAction<string>>
}
export default textAreaInterface;