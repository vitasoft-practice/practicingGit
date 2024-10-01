type CheckboxT = {
    value: any,
    onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e?: React.FocusEvent<HTMLInputElement>) => void,
    name: string,
    labelText?: string,
    placeholder?: string,
    accept?: string,
    disabled?: boolean,
    multiple?: boolean,
    required?: boolean,
    errorMsg?: string | boolean,
    checked: boolean
}


const Checkbox = ({
    value,
    onChange,
    onBlur,
    name,
    labelText,
    disabled,
    required = false,
    errorMsg,
    checked
}: CheckboxT) => {

    return (
        <div className={"input-container checkbox"}>
            <div className="checkbox-container">

                <input
                    disabled={disabled}
                    className={`input-field ${errorMsg ? "error-bounce" : ""}`}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    type={'checkbox'}
                    onBlur={onBlur}
                />
                <label className={"input-label"}>
                    {labelText}
                    {required ? <span style={{ color: "red" }}>*</span> : null}
                </label>
            </div>
            {
                errorMsg && (
                    <p className={"input-field-error-msg"}>
                        {errorMsg}
                    </p>
                )
            }
        </div>
    );
};

export default Checkbox;