import style from "styled-components";

export const StyledNav = style.nav`
    background-color: #053742;
    width: 100%;
    height: 60px;
    padding-top: 5px;
    margin: 0 0 100px 0;
`
export const StyledNavElementContainer = style.ul`
    list-style: none;
    margin: 0;
    justify-content: space-around;
    padding: 10px;
    flex-direction: row;
    display: flex;
`
export const StyledNavElement = style.li`
    color: #fff;
    font-size: 20px;
    &:hover{
        color: #000;
        border-bottom: 1px solid #000;
    }
    &:active{
        color: #000;
        border-bottom: 1px solid #000;
    }

`