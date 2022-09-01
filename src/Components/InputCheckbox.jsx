import React from 'react'

const InputCheckbox = ({ content }) => {
    let { label, options } = content;
    console.log('hey')
    return (
        <>
            <label >{label}:</label><br />
            {options.map((option, index) => {
                return (
                    <>
                        <input type="checkbox" key={index} name={option} value={option} />
                        <label>{option}</label>
                        <br />
                    </>
                )
            })}
        </>
    )
}

export default InputCheckbox