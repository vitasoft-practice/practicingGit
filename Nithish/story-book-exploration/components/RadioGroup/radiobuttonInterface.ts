export interface element {
    val: string,
    disabled: boolean
}


interface radiobuttonInterface {
    themeColor: string,
    disabled?: boolean,
    elements: Array<element>

}
export default radiobuttonInterface;