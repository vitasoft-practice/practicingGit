import { Dispatch, SetStateAction } from 'react';

interface textAreaInterface {
    rows: number,
    disabled?: boolean,
    themeColor: string,
    cols: number,
    value: string,
    placeholder: string,
    name: string,
    id: string,
}
export default textAreaInterface;