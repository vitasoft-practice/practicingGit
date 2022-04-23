import React from 'react';
import {useFormik} from 'formik';
interface logindetails{
    name: String,
    email: String
}

const Loginform: React.FC<logindetails>=()=>{
    const formik = ()=>{ useFormik({
        initialValues:{
            name:'',
            email:''

        },
        onSubmit: Value => {
            console.log(Value)
        },
        validate: Value =>{

            let errors= {}
            if(!Value.name){
                errors.name= 'required'
            }
            if(!Value.email){
                errors.email='required'
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Value.email)){
                errors.email='Invalid Format'

            }
            return errors;
        }
    })
}
    // console.log('formik values',formik.values)
    return(
        <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >
            Username
            </label>
            <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
            {formik.errors.name ? (<div>{formik.errors.name}</div>) : null}

            <label htmlFor='email' >
            Email
            </label>
            <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} />
            {formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

            <button type='submit'>
                Submit
            </button>
        </form>
        </div>
    )
}
export default Loginform;