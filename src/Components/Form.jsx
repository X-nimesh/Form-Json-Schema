import React, { useEffect } from 'react'
import formSchema from '../formSchema.json';

import { useState } from 'react';

const Form = ({ setFormData, FormData }) => {
    let data = FormData;
    let [Errors, setErrors] = useState({});

    useEffect(() => {
        formSchema.map(field => {
            Errors = { ...Errors, [field.content.name]: false }
        })
    }, [])

    let HandleChange = (e) => {
        const name = e.target.name;
        data[name] = e.target.value;
        setFormData(data);

        let validation = formSchema.filter((item) => {
            if (item.content.name === name) {
                return item;
            }
        })
        if (!FormData[name]?.match(validation[0].content.validate)) {
            setErrors({ ...Errors, [name]: true })
        }
        else {
            setErrors({ ...Errors, [name]: false })
        }
    }
    let onSubmit = (e) => {
        e.preventDefault();
        let errors = false;
        Object.values(Errors).forEach((item) => {
            if (item) {
                errors = true;
                alert('Please fill the form correctly');
            }
        })
        if (errors) {
            return;
        }
        console.log(FormData);
        console.log('submited');
    }


    return (
        <>
            <form>
                {formSchema.map((item, index) => {
                    return (
                        <div key={index}>
                            <label>
                                {item.content.label}:
                            </label>
                            <input type={item.type} placeholder={item.content.placeholder} name={item.content.name} defaultValue={FormData[item.content.label]} onChange={(e) => HandleChange(e)} />
                            <p className='errors'>{Errors[item.content.name] ? item.content.errormsg : null}</p>
                        </div>
                    )
                })}

                <button type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
        </>
    )
}

export default Form