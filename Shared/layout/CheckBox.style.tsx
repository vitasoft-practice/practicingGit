import styled from "styled-components";

interface checkType {
  disabled: boolean;
}

export const CheckDiv = styled.div`
border:1px solid #eee;
box-shadow:0 1px 2px #333;

`

export const CheckItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const CheckLabel = styled.label<checkType>`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
  padding-left:22px;
  ${props => props.disabled && `
  
  background-color:#eee;
  color:#eee;
`};
`;


export const CheckBox = styled.input.attrs({
  type: "checkbox"
})`
opacity: 0;
z-index: 1;
cursor: pointer;
width: 25px;
height: 25px;
margin-right: 10px;
${props => props.disabled && `
  
  background-color:#eee;
  color:#eee;
`}; 

  &:hover ~${CheckLabel} {
  background: #ccc;
    &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin-right: 16px;
    background: #eeeeee;

  }
}
 
  &:checked + ${CheckLabel} {
  background: gray;
  border: 1px solid #eee;
    &::after {
    content: "";
    display: block;
    color: white;
    width: 12px;
    height: 12px;
    margin: 4px;

  }
}
`;

