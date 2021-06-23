import styled from 'styled-components'



interface Buttontype {
    btnPrimary: boolean;
    btnSecondary: boolean;
    btnSm: boolean;
    btnMd: boolean;
    btnLg: boolean;
    btnBlock: boolean;
   

}

export const Button: any = styled.button.attrs(props => ({
    type: props.type || 'button',
    form: props.form,
    value: props.value,
    name: props.name

})) <Buttontype>`
background-color: #fff;
color:#333;
border-color:#fff;
${props => props.btnPrimary && `
background-color:#007bff;
color:#fff;
border-color:#007bff;
`};

${props => props.btnSecondary && `
background-color:#137;
color:#fff;
border-color:#137;
`};


${props => props.btnSm && `
   padding:5px 10px;
   font-size:12px;
   line-height:20px;
   border-radius:2px;
  `}
  ${props => props.btnMd && `
   padding:6px 15px;
   font-size:14px;
   line-height:20px;
   border-radius:5px;
  `}
  ${props => props.btnLg && `
   padding:10px 25px;
   font-size:16px;
   line-height:20px;
   border-radius:5px;
  `}
  ${props => props.btnBlock && `
      display:block;
     width:100%;
  `}


`;