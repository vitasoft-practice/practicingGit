import style from 'styled-components';

type ButtonProps = {
    color: string,
    fontSize: number,
    borderRadius: number,
}

export const StyledFormButton = style.button<ButtonProps>`
    outline: none;
    border-radius: ${props => props.borderRadius}px;
    font-size: ${props => props.fontSize}px;
    font-weight: 600;
    color: #fff;
    line-height: 20px;
    cursor: pointer;
    border: 0;
    padding: 8px 15px;
    background: ${props => props.color};
    &:hover{
        background: #3D6DF9;
    }
    &:focus{
        transform: scale(1.025);
    }

`