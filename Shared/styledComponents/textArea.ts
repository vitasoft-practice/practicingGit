import style from 'styled-components';

const normal = "#FFFFFF"



export const StyledTextArea = style.textarea`
    margin: 10px;
    padding: 15px 25px;
    min-width: 300px;
    max-width: 700px;
    font-size: 28px;
    font-weight: bold;
    border: 3px solid ${normal};
    background-color: #151515;
    color:  ${normal};
    border-radius: 5px;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: ${normal};
    }

`