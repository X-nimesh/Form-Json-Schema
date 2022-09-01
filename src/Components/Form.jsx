import React from 'react'
import formSchema from '../formSchema.json';

import { useState } from 'react';

const Form = ({ setFormData, FormData }) => {
    let data = FormData;
    let name = '';
    console.log(data);
    let HandleChange = (e) => {
        name = e.target.name;
        data[name] = e.target.value;
        setFormData(data);
        console.log(FormData);
    }
    let onSubmit = (e) => {
        e.preventDefault();
        formSchema.map((item, index) => {
            name = item.content.name;
            console.log(name)
            console.log(FormData[name])
            console.log(item.content.validate)
            if (!FormData[name]?.match(item.content.validate)) {
                alert(item.content.errormsg)
            }
        })
        console.log(FormData.Name);
        console.log('submit');
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
                        </div>
                    )
                })}

                <button type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
        </>
    )
}

export default Form