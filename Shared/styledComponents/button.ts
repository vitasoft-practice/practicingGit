import style from "styled-components";

type Props = {
    backgroundColor: string
}

export const StyledButton = style.button<Props>`
    margin: 10px;
    padding: 15px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.backgroundColor};
    &:hover{
        opacity: 0.6;
    }
`