import React, { useEffec, useMemo } from 'react'
import formSchema from '../formSchema.json';

import { useState } from 'react';

const DynamicForm = ({ setFormData, FormData }) => {

    let errorsTemp = {};
    let validationTemp = {};

    useMemo((errorsTemp, validationTemp) => {
        formSchema.map(field => {
            errorsTemp = { ...errorsTemp, [field.content.name]: false }
            validationTemp = { ...validationTemp, [field.content.name]: field.content.validate }
        })

    }, [formSchema])

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

        let errorCheck = (item) => {
            return item === true;
        }

        if (Object.values(Errors).some(errorCheck)) {
            errors = true;
            alert('Please fill the form correctly');
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

                <button class="submit" type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
        </>
    )
}

export default DynamicForm