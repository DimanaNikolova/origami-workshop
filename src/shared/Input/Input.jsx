import React from 'react'
import  './Input.css';

const Input = ({label, id, value, onChange}) => {
    return (
        <div className="form-control">
            <label htmlFor={id}>
                {label}:
            </label>
            <input id={id} value={value} onChange={onChange} />
        </div>
    )
}

export default Input