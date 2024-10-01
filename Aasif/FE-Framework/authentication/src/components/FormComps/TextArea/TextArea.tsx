type TextAreaT = {
    value: any,
    onChange: (e?: React.ChangeEvent<HTMLTextAreaElement>) => void,
    onBlur: (e?: React.FocusEvent<HTMLTextAreaElement>) => void,
    name: string,
    labelText?: string,
    placeholder?: string,
    disabled?: boolean,
    required?: boolean,
    rows?: number,
    errorMsg?: string | boolean
}


const TextArea = ({
    value,
    onChange,
    onBlur,
    name,
    labelText,
    placeholder,
    disabled,
    required = false,
    errorMsg,
    rows = 3
}: TextAreaT) => {

    return (
        <div className={"input-container"}>
            <label className={"input-label"}>
                {labelText}
                {required ? <span style={{ color: "red" }}>*</span> : null}
            </label>

            <textarea
                disabled={disabled}
                className={`input-field ${errorMsg ? "error-bounce" : ""} textarea-input`}
                value={value}
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                onBlur={onBlur}
                rows={rows}
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

export default TextArea;