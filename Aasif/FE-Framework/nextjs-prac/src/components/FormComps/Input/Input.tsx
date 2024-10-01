import './Input.scss'


type InputT = {
    value: any,
    onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e?: React.FocusEvent<HTMLInputElement>) => void,
    name: string,
    labelText?: string,
    placeholder?: string,
    accept?: string,
    disabled?: boolean,
    type?: string,
    multiple?: boolean,
    required?: boolean,
    errorMsg?: string | boolean
}


const Input = ({
    value,
    onChange,
    onBlur,
    name,
    labelText,
    placeholder,
    accept,
    disabled,
    type = 'text',
    multiple,
    required = false,
    errorMsg,
}: InputT) => {

    return (
        <div className={"input-container"}>
            <label className={"input-label"}>
                {labelText}
                {required ? <span style={{ color: "red" }}>*</span> : null}
            </label>

            <input
                disabled={disabled}
                className={`input-field ${errorMsg ? "error-bounce" : ""}`}
                value={value}
                checked={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                type={type}
                onBlur={onBlur}
                accept={accept}
                multiple={multiple}
            />

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

export default Input;