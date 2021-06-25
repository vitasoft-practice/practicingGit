import { PropsWithChildren } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import redux from '../../styles/reduxForm.module.scss';
import { useSelector } from "react-redux";
import RootState from "../../interfaces/Rooststate";
import { formatWithValidation } from "next/dist/next-server/lib/utils";

const ReduxForm = (props: InjectedFormProps) => {
    interface valueProps {
        firstform?: {
            values: {
                Name: string
            }
        }
    }
    const value: valueProps = useSelector((state: RootState) => state.form);
    console.log(value?.firstform?.values?.Name)

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={redux.container}>
                <p>Redux Form</p>
                <Field className={redux.input}
                    name="Name"
                    component="input"
                    type="text"
                    placeholder="Name"
                />
                <button className={redux.button} type="submit">Submit</button>
                <p>{value?.firstform?.values?.Name}</p>
            </div>

        </form>
    )
}
const ReduxForms = reduxForm({
    form: 'firstform'
})(ReduxForm);

export default ReduxForms;