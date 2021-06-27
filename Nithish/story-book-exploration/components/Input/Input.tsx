import { StyledInput } from "./StyledInput";
import InputpropsInterface from "./inputPropsInterface";

const Input = (props: InputpropsInterface) => {
    return <StyledInput placeholder={props.placeholder} color={props.color}></StyledInput>;
}
export default Input;