import style from 'styled-components';

const borderDefault = '#D0D0DF';
const borderActive = '#3D6DF9';
const shadowDefault = '#{rgba(#202048, .12)}';
const shadowDefaultActive = 'rgba(61, 109, 249, .8)';

type inputProps = {
    shadowColor: string
}

export const StyledFormInput = style.input<inputProps>`
    -webkit-appearance: none;
    line-height: 20px;
    margin: 5px;
    min-width: 15rem;
    border: 1px solid #D0D0DF;
    background: #fff;
    outline: none;
    border-radius: 6px;
    padding: 12px 16px;
    font-size: 14px;
    font-weight: 500;
    &::placeholder{
        color: #D0D0DF;
        transition: color .2s;
    }
    &:hover{
        &::placeholder{
            color: #444444;
        }
    }
    &:focus{
        box-shadow: inset 0 0 0 2px ${props => props.shadowColor};
        transition: box-shadow .2s;
        
    }

`