import ButtonPropsInterface from "./buttonPropsInterface";
import { StyledButton } from "./StyledButton";


const Button = (props: ButtonPropsInterface) => {
    return <StyledButton size={props.size} color={props.color}>{props.children}</StyledButton>
}
export default Button;