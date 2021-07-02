import React, { useState } from 'react'

const CheckBoxWithLabel = ({ labelOn, labelOff }: any) => {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>


            <label>
                <input type="checkbox" checked={isChecked} onChange={onChange} />
                {isChecked ? labelOn : labelOff}
            </label>

        </div>
    )
}

export default CheckBoxWithLabel
