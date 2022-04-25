import React from 'react';
import {useFormik} from 'formik';
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import {makeStyles} from '@mui/styles'

interface logindetails{
    name: String,
    email: String,
}
//using formik validation
const useStyles = makeStyles({
    btn :{
        color: 'blue',
        height: 48,
        padding: '30px 30px',   
    }
})

const Loginform: React.FC<logindetails>=()=>{

    const classes=useStyles()

    const formik =  useFormik({
        initialValues:{
            name:'',
            email:''

        },
        onSubmit: (Value) => {
            console.log(Value)
        },
        validate: (Value) =>{

            let errors= {name:'',
            email:''}
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

    // console.log('formik values',formik.values)
    return(
        <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='name' >
            Username
            </label>
            <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
            <br/>
            {formik.errors.name ? (<div>{formik.errors.name}</div>) : null}

            <label htmlFor='email' >
            Email
            </label>
            <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} />
            <br/>
            {formik.errors.email ? (<div>{formik.errors.email}</div>) : null}

            <Button className={classes.btn} variant='contained' color='secondary' type='submit' startIcon={<SaveIcon/>} onClick={()=>{alert('submitted')}}>
                Submit
            </Button>
        </form>
        </div>
    )
}

export default Loginform;


