import CheckBoxes from "../components/Checkboxes";
import checkboxInterface from "../interfaces/checkboxinterface";

const Checkboxes = () => {
    const primary = "#5F939A";
    const secondary = "#FF7B54";
    const checkBoxProps: checkboxInterface = {
        themeColor: primary
    }
    return (
        <CheckBoxes props={checkBoxProps} />
    )
}

export default Checkboxes;