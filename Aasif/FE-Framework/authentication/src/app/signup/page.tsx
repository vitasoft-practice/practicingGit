'use client'

import React from "react";
import * as Yup from "yup";
import { SignupT } from "./types";
import Input from "@/components/FormComps/Input/Input";
import classes from '@/components/ContactForm/form.module.scss'
import Button from "@/components/Button/Button";
import axios from "axios";
import { ApiUrl } from "@/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormik } from 'formik'
import toast from "react-hot-toast";

const Login = () => {

    const router = useRouter()

    const validation = Yup.object().shape({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string()
            .matches(/^\s*\S[\s\S]*$/g, "Email cannot contain only blankspaces")
            .email("Invalid Email")
            .required("Email is required!"),
        phone_number: Yup.string()
            .required("Required"),
        password: Yup.string().required("Required").min(6, "Minimum of 6 characters"),
        confirm_password: Yup.string().required("Required").oneOf([Yup.ref('password'), ""], "Password must match"),

    });
    const formik = useFormik({
        initialValues: {
            first_name: "",
            middle_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            password: "",
            confirm_password: "",
        },
        validationSchema: validation,
        onSubmit: async (values: SignupT) => {
            console.log(values);
            try {
                const response = await axios.post(ApiUrl + '/user', values).then(res => res.data);
                if (response.success) {
                    router.push('/login');
                    toast.success(response.message)
                } else {
                    toast.error(response.message)
                }
            } catch (e: any) {
                toast.error(e?.response?.data?.message || e.message)
                console.log("SignUp Error: ", e?.response?.data?.message || e.message)
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.signup_form_container}>

            <main className={`${classes.fields_wrapper} ${classes.signup_wrapper}`}>
                <h3 className={classes.form_title}>Signup</h3>
                <div className="col-2">
                    <div>
                        <Input
                            labelText={"First Name"}
                            placeholder="Enter first name"
                            type="text"
                            name="first_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.first_name}
                            errorMsg={formik.touched?.first_name && formik.errors?.first_name}
                        />
                    </div>
                    <div>
                        <Input
                            labelText={"Last Name"}
                            placeholder="Enter last name"
                            type="text"
                            name="last_name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.last_name}
                            errorMsg={formik.touched?.last_name && formik.errors?.last_name}
                        />
                    </div>
                    <div>
                        <Input
                            labelText={"Email"}
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            errorMsg={formik.touched?.email && formik.errors?.email}
                        />
                    </div>
                    <div>
                        <Input
                            labelText={"Phone Number"}
                            placeholder="Enter phone number"
                            type="number"
                            name="phone_number"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone_number}
                            errorMsg={formik.touched?.phone_number && formik.errors?.phone_number}
                        />
                    </div>
                    <div>
                        <Input
                            labelText={"Password"}
                            placeholder="Enter your password"
                            type={"password"}
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMsg={formik.touched?.password && formik.errors?.password}
                        />
                    </div>
                    <div>
                        <Input
                            labelText={"Confirm Password"}
                            placeholder="Re-Enter your password"
                            type={"password"}
                            name="confirm_password"
                            value={formik.values.confirm_password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            errorMsg={formik.touched?.confirm_password && formik.errors?.confirm_password}
                        />
                    </div>
                </div>
                <section className={classes.form_buttons}>
                    <Button type="submit" className='' onClick={() => { }} btnType='primary'>Sign Up</Button>
                </section>

                <p className={classes.footer_option}>Already have account? <Link href='/login'>Login</Link></p>
            </main>
        </form>
    );
};

export default Login;