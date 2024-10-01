import React from 'react'
import classes from './Button.module.scss'
type ButtonT = {
    children: React.ReactNode,
    onClick: React.MouseEventHandler,
    className: string,
    type: "button" | "submit" | "reset"
    btnType: "primary" | "secondary"
}

const Button = ({ children, onClick, className, type, btnType }: ButtonT) => {
    return (
        <button onClick={onClick} className={`${className} ${classes.custom_button} ${classes[btnType]} ${classes["btn-grad"]}`} type={type}>{children}</button>
    )
}

export default Button