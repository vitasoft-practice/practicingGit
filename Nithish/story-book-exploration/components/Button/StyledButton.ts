import style from 'styled-components';
import { isPropertySignature } from 'typescript';


type ButtonProps = {
    color: string,
    size: string
}

export const StyledButton = style.button<ButtonProps>`
    font-size: 16px;
    color: white;
    ${props => (props.size === "small") && `
        font-size: 14px;
        padding: 10px 15px;
    `}
    ${props => (props.size === "medium") && `
        font-size: 20px;
        padding: 12px 20px;
    `}
    ${props => (props.size === "large") && `
        font-size: 25px;
        padding: 20px 30px;
    `}
    padding: 15px 25px;
    background-color: ${props => props.color};
    margin: 5px;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`
