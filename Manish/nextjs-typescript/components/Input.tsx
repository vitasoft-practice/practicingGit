import React, { Component } from 'react'

const Input = ({
    input,
    type,
    label,
    placeholder,

    meta: { touched, error }

}: any) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} placeholder={placeholder} />
            {
                touched && error && (
                    <span style={{ fontSize: "12px", color: "red" }}>{error}</span>
                )
            }
        </div>
    )
}

export default Input
