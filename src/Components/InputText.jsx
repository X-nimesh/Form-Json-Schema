import React from 'react'

const InputText = ({ content, defaultValue, setName }) => {

    let { label, placeholder, minlength } = content;
    let handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <>
            <label >{label}:</label>
            <input type="text"
                placeholder={placeholder}
                value={defaultValue}
                onChange={(e) => handleChange(e)}
                minLength={minlength}
            />
            <br />

        </>
    )
}

export default InputText