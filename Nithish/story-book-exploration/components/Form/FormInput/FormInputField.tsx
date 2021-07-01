import { StyledFormInput } from "./formInput";
import forminputInterface from "./forminputinterface";

const FormInputField = (props: forminputInterface) => {
    return <StyledFormInput shadowColor={props.shadowColor} placeholder={props.placeholder}></StyledFormInput>
}
export default FormInputField;