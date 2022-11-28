import NavBar from "../../components/navbar/navbar"
import * as yup from "yup"
import { useFormik } from "formik"
import axios from "axios";
export default function LogIn() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: yup.object({
            email: yup.string().email("invalid email").required("email required")
        }),
        onSubmit: (values) => {
            
        //  axios.post('http://localhost:8000/login', {
        //    username: values.email,
        //    password: values.password
        //})
        //  .then(function (response) {
        //    console.log(response);
        //    
        //  })
        },
      });
      console.log("eroord:",formik.touched)
    return (
      <div className="signUp">
        <NavBar />
        <div>Helooo Log in Up</div>
            <form onSubmit={formik.handleSubmit}>
                <input id="email" name="email" placeholder="email" onChange={formik.handleChange}
                value={formik.values.email} onBlur={formik.handleBlur}>
                </input>
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                <input id="password" name="password" placeholder="password" onChange={formik.handleChange}
                value={formik.values.password} onBlur={formik.handleBlur}>
                </input>
                <button type="submit">Submit</button>
            </form>
        </div>
      
    )
  }
  