// import React  from "react";
// import {Formik, Field} from 'formik'

// const CreateForm = () => {
//     return (
//       <Formik
//         initialValues={{
//           test: '13',
//         }}
//         onSubmit={() => {}}
//         render={(props) => (
//           <form onSubmit={props.handleSubmit}>
//             <Field name="test" />
//           </form>
//         )}
//       />
//     );
//   }
  
//   export default CreateForm;

import * as React from 'react';
import Button from '@material-ui/core/Button';

 import {
   Formik,
   FormikHelpers,
   FormikProps,
   Form,
   Field,
   FieldProps,
 } from 'formik';
 
 interface MyFormValues {
   firstName: string;
 }
 
 function createForm () {
   const initialValues: MyFormValues = { firstName: '' };
   return (
     <div>
       <h1>Formik Example</h1>
       <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
           console.log({ values, actions });
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }}
       >
         <Form>
           <label htmlFor="firstName">First Name</label>
           <Field id="firstName" name="firstName" placeholder="First Name" />
           <Button variant = "contained" color="primary" type="submit">Submit</Button>
         </Form>
         {}
       </Formik>
       
     </div>
   );
 };

 export default createForm;