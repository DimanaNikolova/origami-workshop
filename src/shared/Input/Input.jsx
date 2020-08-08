import React from 'react'
import  './Input.css';

const Input = ({label, id, value, onChange,type}) => {
    return (
        <div className="form-control">
            <label htmlFor={id}>
                {label}:
            </label>
            <input id={id} value={value} type={type} onChange={onChange} />
        </div>
    )
}

export default Input