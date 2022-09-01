import React from 'react'

const InputText = ({ content }) => {

    let { label, placeholder, minlength } = content;
    return (
        <>
            <label >{label}:</label>
            <input type="text" placeholder={placeholder} minLength={minlength} />
            <br />

        </>
    )
}

export default InputText