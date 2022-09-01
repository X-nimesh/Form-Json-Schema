import React from 'react'

const InputPassword = ({ content }) => {
    let { label, pattern } = content;
    return (
        <>

            <label >{label}</label>
            <input type="password" pattern={pattern} />
            <br />

        </>
    )
}

export default InputPassword