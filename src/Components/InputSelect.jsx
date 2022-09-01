import React from 'react'

const InputSelect = ({ content, setSelect, defaultValue }) => {
    let { label, options } = content;
    let handleChange = (e) => {
        setSelect(e.target.value)
    }
    return (
        <>
            <label >{label}:</label>
            <select onChange={(e) => handleChange(e)} defaultValue={defaultValue}>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option} >{option}</option>
                    )
                })}


            </select >
            <br />
        </>
    )
}

export default InputSelect