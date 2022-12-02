import NavBar from "../../components/navbar/navbar"
import * as yup from "yup"
import { useFormik } from "formik"
import axios from "axios";
import styles from "./signup.module.scss"
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
export default function SignUp() {
    const router =useRouter();
    const formik = useFormik({
        initialValues: {
          username:'',
          email: '',
          password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email("invalid email").required("email required"),
            username: yup.string().min(8,"username must be atleast 8 characters long").required("username required"),
            password: yup.string().min(4,"password must be atleast 4 characters long").required("password required")
        }),
        onSubmit:async (values) => {
          try {
            const singUpResponse = await axios.post('http://localhost:8000/user/signUp', {
              email: values.email,
              username: values.username,
              password: values.password
            })
            if(singUpResponse.data.message === "Sucess" && singUpResponse.data.status === "200"){
              router.push("../logIn/login")
            }
          } catch (err) {
            alert("signup failed " + err)
          }
        
        },
      });
    return (
      <div className={styles.SignupPage}>
        <NavBar />
        <div className={styles.signUpwrapper}>
        <div className={styles.signUpHeader}>sign Up</div>
            <form onSubmit={formik.handleSubmit} className={styles.signUpForm}>
                <input className={styles.signupInput} id="email" name="email" placeholder="email" onChange={formik.handleChange}
                value={formik.values.email} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.email && formik.errors.email ? <p className={styles.errorMessage}>{formik.errors.email}</p> : null}
                <input className={styles.signupInput} id="username" name="username" placeholder="username" onChange={formik.handleChange}
                value={formik.values.username} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.username && formik.errors.username ? <p className={styles.errorMessage}>{formik.errors.username}</p> : null}
                <input className={styles.signupInput} type="password" id="password" name="password" placeholder="password" onChange={formik.handleChange}
                value={formik.values.password} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.password && formik.errors.password ? <p className={styles.errorMessage}>{formik.errors.password}</p> : null}
                <Button sx={{
                  color: 'white',
                  background: 'black',
                  width: '50%',
                  marginTop: "5%",
                  padding:"1%",
                  marginBottom:"5%",
                  '&:hover': {
                    background: 'linear-gradient(93.03deg, #20B2E3 -27.2%, #0ED9D4 135.73%)',
                    color: '#3c52b2',
                  }
                  }} type="submit">Submit</Button>
            </form>
        </div>
        </div>
      
    )
  }
  