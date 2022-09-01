import React from 'react'

const InputSelect = ({ content }) => {
    let { label, options } = content;
    return (
        <>
            <label >{label}:</label>
            <select>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option}>{option}</option>
                    )
                })}


            </select>
            <br />
        </>
    )
}

export default InputSelect