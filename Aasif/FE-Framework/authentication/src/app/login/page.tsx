'use client'

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginT } from "./types";
import Input from "@/components/FormComps/Input/Input";
import classes from '@/components/ContactForm/form.module.scss'
import Button from "@/components/Button/Button";
import axios from "axios";
import { ApiUrl } from "@/constant";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

const Login = () => {

    const router = useRouter()

    const validation = Yup.object().shape({
        email: Yup.string()
            .matches(/^\s*\S[\s\S]*$/g, "Email cannot contain only blankspaces")
            .email("Invalid Email")
            .required("Email is required!"),

        password: Yup.string()
            .matches(/^\s*\S[\s\S]*$/g, "Password cannot contain only blankspaces")
            .required("Password is required!"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validation,
        onSubmit: async (values: LoginT) => {
            console.log(values);
            try {
                const response = await axios.post(ApiUrl + '/auth/login', values).then(res => res.data);
                console.log(response)
                if (response.success) {
                    localStorage.setItem('token', response.data)
                    axios.defaults.headers.common.Authorization = "Bearer " + response.data
                    document.cookie = `token=${response.data};`; 
                    toast.success(response.message)
                    router.push('/');
                }
            } catch (e: any) {
                router.refresh()
                console.log("Login Error: ", e?.response?.data?.message || e.message)
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={classes.signup_form_container}>

            <main className={`${classes.fields_wrapper} ${classes.login_wrapper}`}>
                <h3 className={classes.form_title}>Login</h3>
                <div>
                    <Input
                        labelText={"Email"}
                        placeholder="Enter your email"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        errorMsg={formik.touched?.email && formik.errors?.email}
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

                <section className={classes.form_buttons}>
                    <Button type="submit" className='' onClick={() => { }} btnType='primary'>Sign In</Button>
                </section>

                <p className={classes.footer_option}>Do not have account? <Link href='/signup'>Sign Up</Link></p>
            </main>
        </form>
    );
};

export default Login;