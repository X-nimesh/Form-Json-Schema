import React, { useEffect } from 'react'
import formSchema from '../formSchema.json';

import { useState } from 'react';

const DynamicForm = ({ setFormData, FormData }) => {

    let errorsTemp = {};
    let validationTemp = {};

    formSchema.map(field => {
        errorsTemp = { ...errorsTemp, [field.content.name]: false }
        validationTemp = { ...validationTemp, [field.content.name]: field.content.validate }
    })


    const [Errors, setErrors] = useState(errorsTemp);
    const [Validate, setvalidate] = useState(validationTemp);



    const HandleChange = (e) => {
        const name = e.target.name;

        if (!e.target.value?.match(Validate[name])) {
            setErrors({ ...Errors, [name]: true })
        }
        else {
            setErrors({ ...Errors, [name]: false })
            setFormData({ ...FormData, [name]: e.target.value });
        }
    }
    const onSubmit = (e) => {
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

export default DynamicForm