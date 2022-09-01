import React from 'react'
import formSchema from '../formSchema.json';

import { useState } from 'react';

const Form = () => {
    let data = [];
    let HandleChange = (e) => {
        console.log(e.target.name);
        data[e.target.name] = e.target.value;
    }
    let onSubmit = (e) => {
        e.preventDefault();
        if (!data['Name']?.match(/^[a-zA-Z]+$/)) {
            alert('Name should be only alphabets')
        }
        if (!data['Password']?.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)) {
            alert('Password should be minimum 8 characters, at least one uppercase letter, one lowercase letter and one number')
        }
        if (!data['Phone']?.match(/^[0-9]{10}$/)) {
            alert('Phone number should be 10 digits')
        }
        console.log(data);
        console.log('submit');
    }
    return (
        <>
            <form>
                {formSchema.map((item, index) => {
                    console.log('rtender')
                    return (<div>
                        <label>
                            {item.content.label}:
                        </label>
                        <input type={item.type} placeholder={item.content.placeholder} name={item.content.name} onChange={(e) => HandleChange(e)} />
                    </div>)
                })}

                <button type="submit" onClick={(e) => onSubmit(e)}>Submit</button>
            </form>
        </>
    )
}

export default Form