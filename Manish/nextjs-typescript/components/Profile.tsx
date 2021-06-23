import React from 'react'
import { connect } from 'react-redux'

const Profile = (props :any) => {
    return (
        <div>
            <h2>Profile</h2>
            <h4> <b>Name:</b> {props.formdata.name} </h4>
             <h4> <b>Email:</b> {props.formdata.email} </h4>
            <h4> <b>Phone:</b> {props.formdata.mobile} </h4>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return ({
        formdata: state.form.loginform.values
    })
}

export default connect(mapStateToProps)(Profile)
