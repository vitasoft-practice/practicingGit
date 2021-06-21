import React from 'react'
import { FormErrors } from 'redux-form'
interface userTypes {
    name?: string,
    email?: string,
    mobile?: number
}

const Validators = (values: userTypes): FormErrors<userTypes> => {
    const errors: FormErrors<userTypes> = {}

console.log(values.name);
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length < 3) {
        errors.name = 'Name should grether than 3';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
        errors.email = 'Invalid Email !!! example@gmail.com';
    }
    if (!values.mobile) {
        errors.mobile = 'Mobile is required'
        } else if (values.mobile.toString().length < 10) {
            errors.mobile = 'mobile should equal to 10';
        } else if (values.mobile.toString().length < 6) {
            errors.mobile = 'mobile should start with 6-9';
    }
    console.log(errors);
    console.log("values" + values);
    return errors;
}



export default Validators
