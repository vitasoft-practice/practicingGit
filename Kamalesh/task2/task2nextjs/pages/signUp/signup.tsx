import NavBar from "../../components/navbar/navbar"
import * as yup from "yup"
import { useFormik } from "formik"
import axios from "axios";
export default function SignUp() {
    const formik = useFormik({
        initialValues: {
          username:'',
          email: '',
          password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email("invalid email").required("email required"),
            username: yup.string().min(8,"username must be atleast 8 characters long").required("username required")
        }),
        onSubmit: (values) => {
            
        
        },
      });
      console.log("eroord:",formik.touched)
    return (
      <div className="signUp">
        <NavBar />
        <div>Helooo sign Up</div>
            <form onSubmit={formik.handleSubmit}>
                <input id="email" name="email" placeholder="email" onChange={formik.handleChange}
                value={formik.values.email} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                <input id="username" name="username" placeholder="username" onChange={formik.handleChange}
                value={formik.values.username} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.username && formik.errors.username ? <p>{formik.errors.username}</p> : null}
                <input id="password" name="password" placeholder="password" onChange={formik.handleChange}
                value={formik.values.password} onBlur={formik.handleBlur}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
      
    )
  }
  