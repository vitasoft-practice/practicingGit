import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'
import Profile from '../components/Profile'
import validateForm from '../components/Validators'
import Input from '../components/Input'

const Login = (props: any) => {
    console.log(props)
    const [showProfile, setShowProfile] = useState(false)
    return (
        <>
            <h2>Fill the Form!</h2>
            <form onSubmit={props.handleSubmit((formValues: any) => {
                setShowProfile(true)
            })}>
                {/* <label>Name:</label>
                <Field type='text' name='name' component='input' label='Name:' /><br />
                <label>Email:</label>
                <Field type='email' name='email' component='input' label='Email:' /><br />
                <label>Mobile No.:</label>
                <Field type='number' name='mobile' component='input' label='Mobile No.:' /><br /> */}

                <Field type='text' name='name' component={Input} label='Name:' placeholder="Name" /><br />
                <Field type='email' name='email' component={Input} label='Email:' placeholder="Email" /><br />
                <Field type='number' name='mobile' component={Input} label='Mobile No.:' placeholder="Mobile No." /><br />


                <button type="submit" >Submit</button>
                {showProfile ? <Profile /> : null}


            </form>
        </>
    )
}

export default reduxForm({
    form: 'loginform',
    validate: validateForm
})(Login)
