import style from 'styled-components';

type InputProps = {
    color: string
}

export const StyledInput = style.input`
    color: #000;
    border: 1px solid black;
    padding: 15px 20px;
    min-width: 300px;
    border-radius: 3px;
    background-color:${props => props.color};
    font-size: 16px;
    &::placeholder{
        color: black;
    }
    &:hover{
        transform: scale(1.05);
    }

`