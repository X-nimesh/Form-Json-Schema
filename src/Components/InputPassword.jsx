import React from 'react'

const InputPassword = ({ content, defaultValue, setPassword }) => {
    let { label, pattern } = content;
    let handleChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>

            <label >{label}</label>
            <input type="password" pattern={pattern}
                value={defaultValue}
                onChange={(e) => handleChange(e)}
            />
            <br />

        </>
    )
}

export default InputPassword