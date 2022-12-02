import NavBar from "../../components/navbar/navbar"
import * as yup from "yup"
import { useFormik } from "formik"
import { useRouter } from "next/router";
import styles from "./loginStyle.module.scss"
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { populateUserDetail } from "../../slices/userDetail"
export default function LogIn() {
  const dispatch = useDispatch();
  const router =useRouter();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email("invalid email").required("email required"),
            password: yup.string().min(4,"password must be atleast 4 characters long").required("password required")
        }),
        onSubmit: async (values) => {
        const response = await fetch('../api/login',{
          method:'POST',
          body: JSON.stringify({
            username: values.email,
            password: values.password
          })
        })
        const resData = await response.json()
        if(resData && resData.message === "Authenticated"){
          await dispatch(populateUserDetail(resData))
          router.push("../dashboard/")
        }
        else if(resData.message === "unauthorized"){
          alert("unauthorized users")
        }
        },
      });
    return (
      <div>
        <NavBar />
        <div className={styles.LoginPage}>
        <div className={styles.LoginWrapper}>
          <div className={styles.Login_header}>Log in Up</div>
              <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
                  <input className={styles.loginInput} id="email" name="email" placeholder="email" onChange={formik.handleChange}
                  value={formik.values.email} onBlur={formik.handleBlur}>
                  </input>
                  {formik.touched.email && formik.errors.email ? <p id="emailerror" className={styles.errorMessage}>{formik.errors.email}</p> : null}
                  <input className={styles.loginInput} type="password"  id="password" name="password" placeholder="password" onChange={formik.handleChange}
                  value={formik.values.password} onBlur={formik.handleBlur}>
                  </input>
                  {formik.touched.password && formik.errors.password ? <p id="passworderror" className={styles.errorMessage}>{formik.errors.password}</p> : null}
                  <Button
                  className="LoginButton"
                  sx={{
                  color: 'white',
                  background: 'black',
                  width: '50%',
                  marginTop: "10%",
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
        </div>
      
    )
  }
  