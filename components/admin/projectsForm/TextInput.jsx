import { useState } from 'react'

const TextInput = ({ children, labelName, setProjectData }) => {
    const inputHandler = (e) => {
        setProjectData({[e.target.name]: e.target.value})
    }
    
    return (
        <label htmlFor={labelName}>
            {children}
            <input type="text" name={labelName} id={labelName} onChange={inputHandler} />
        </label>
    )
}

export default TextInput