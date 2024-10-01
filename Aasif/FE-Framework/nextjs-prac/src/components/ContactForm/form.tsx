'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../FormComps/Input/Input';
import classes from './form.module.scss'
import Button from '../Button/Button';
import TextArea from '../FormComps/TextArea/TextArea';
import Checkbox from '../FormComps/Checkbox/Checkbox';
import { useRouter } from 'next/router';

interface FormValues {
  name: string;
  email: string;
  message: string;
  agree: boolean
}

const ContactForm: React.FC = () => {



  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
      agree: false
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required').min(3, "Name must be at least 3 characters"),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required').min(5, "Message must be at least 5 characters"),
      agree: Yup.boolean().oneOf([true], "Please agree to the terms"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form data', values);
      alert("Kindly check console for your submitted data")
      resetForm()
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.signup_form_container}>

      <main className={classes.fields_wrapper}>
        <h3 style={{ color: "#208ec3" }} className={classes.form_title}>Contact Us</h3>
        <div>
          <Input
            name='name'
            labelText='Name'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            errorMsg={formik.touched.name && formik.errors.name}
          />
        </div>
        <div>
          <Input
            name='email'
            labelText='Email'
            type='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            errorMsg={formik.touched.email && formik.errors.email}
          />
        </div>
        <div>
          <TextArea
            name='message'
            labelText='Message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            errorMsg={formik.touched.message && formik.errors.message}
            rows={4}
          />
        </div>
        <div className='mt-2'>
          <Checkbox
            name='agree'
            labelText='I agree to the terms & conditions'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.agree}
            errorMsg={formik.touched.agree && formik.errors.agree}
            checked={formik.values.agree}
          />
        </div>
        <section className={classes.form_buttons}>
          <Button type="submit" className='' onClick={() => { }} btnType='primary'>Submit</Button>
        </section>
      </main>
    </form>
  );
};

export default ContactForm;
