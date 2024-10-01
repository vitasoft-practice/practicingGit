'use client'

import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import type { NextPage } from 'next';
import * as yup from 'yup';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess, setPage, setBooks } from '../../lib/features/loginSlice';
import { selectLPage } from '../../lib/features/loginSlice';
import { selectIsLoggedIn, selectUser } from '../../lib/features/loginSlice';

export const dynamic = 'force-dynamic'

export default function LoginForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);

  let data;

  let req =  {
    username: "john",
    password: "test",
    bookmarks: "",
  };

  let res;
  const postData = async()=>{
    res = await fetch("http://localhost:3001/auth/login",{
      method: "POST",
      body: JSON.stringify({
          username: req.username,
          password: req.password
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  });

let eflag = 0;

console.log("res: " + res.status);

if(res.ok)
{
  data = await res.json()
    console.log(data)
    dispatch(loginSuccess(data));

    res = await fetch("http://localhost:3001/auth/"+req.username);

    if(res.ok) 
      {
        data = await res.json();
        dispatch(setBooks(data.existingUser.bookmarks));
      }
    else console.log("res: " + res.status);

    dispatch(setPage(lPage));
}
else eflag = 1;

if(eflag===1)
     {
      setMessage('Invalid credentials');
      setSubmitted(true);
      setClicked(false);
     }

  }

  const dispatch = useDispatch();

  const lPage = useSelector(selectLPage);

  const formik = useFormik({
    initialValues: {
      Username: '',
      password: '',
    },
    onSubmit: (values) => {

        setClicked(true);

        req.username = values.Username;
        req.password = values.password;

        postData();
      
    },
    validationSchema: yup.object({
      Username: yup.string().trim().required('Username is required'),
      password: yup.string().trim().required('Password is required'),
    }),
  });
//col-sm-4
  return (
    <div>
    
    <div className="mb-4 col-sm-5">
    <h1 className="mb-4">Login</h1>
      <div hidden={!submitted} className="calert alert-primary" role="alert">
        {message}
      </div>

      <form className="mb-3 ms-0" onSubmit={formik.handleSubmit}>
        <div className="mb-3 ms-0">
          <label htmlFor="Username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="Username"
            className="form-control"
            placeholder=""
            value={formik.values.Username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Username && (
            <div className="text-danger">{formik.errors.Username}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder=""
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>

        <button hidden={clicked} type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    </div>
  );

}
