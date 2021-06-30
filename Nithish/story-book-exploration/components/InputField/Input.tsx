import { StyledInput } from "./StyledInput";
import InputpropsInterface from "./inputPropsInterface";


const Input = (props: InputpropsInterface) => {

    return <StyledInput disabled={props.disabled} value={props.value} onChange={event => { props.onchange(event.target.value) }} borderColor={props.borderColor} placeholder={props.placeholder} color={props.color}></StyledInput>;
}
export default Input;