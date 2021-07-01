import formButtonInterface from "./formButtoninterface";
import { StyledFormButton } from "./styledFormButton";

const FormButton = (props: formButtonInterface) => {
    return <StyledFormButton fontSize={props.fontSize} borderRadius={props.borderRadius} color={props.color}>{props.children}</StyledFormButton>
}
export default FormButton;