import React from 'react'

const InputCheckbox = ({ content, defaultValue, setCheckbox }) => {
    let checkboxitem = defaultValue;
    let { label, options } = content;
    let HandleChange = (e) => {
        checkboxitem[e.target.value] = e.target.checked;
        setCheckbox(checkboxitem);

    }

    return (
        <>
            <label >{label}:</label><br />
            {options.map((option, index) => {
                return (
                    <>
                        <input type="checkbox" key={index} name={option} value={option} defaultChecked={defaultValue[option]} onChange={(e) => HandleChange(e)} />
                        <label>{option}</label>
                        <br />
                    </>
                )
            })}
        </>
    )
}

export default InputCheckbox