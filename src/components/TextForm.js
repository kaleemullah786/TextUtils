import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('');
    const handleChange = (e => setText(e.target.value))
    const toUppercase = (() => {
        setText(text.toUpperCase());
        props.showMsg('Converted to Uppercase')
    })
    const toLowercase = (() => {
        setText(text.toLowerCase())
        props.showMsg('Converted to Lowercase')
    })
    const copyText = (() => {
        navigator.clipboard.writeText(text)
        props.showMsg('Copied to clipboard')
    })
    const clearText = (() => setText(''))
    return (
        <div className="container">
            <div className="mb-3 mt-4">
                <h1>{props.heading}</h1>
                <textarea className={`form-control ${props.mode === 'dark' ? 'bg-secondary text-white bg-opacity-25' : 'bg-secondary bg-opacity-10'}`} id="myBox" value={text} onChange={handleChange} rows="15" />
            </div>
            <button className=' btn btn-primary mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={toUppercase}>Uppercase</button>
            <button className=' btn btn-primary mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={toLowercase}>Lowercase</button>
            <button className=' btn btn-primary mx-1' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={copyText}>Copy text</button>
            <button className=' btn btn-danger clear float-end' onClick={clearText}>Clear</button>
            
            <div className='my-5'>
                <h2>Your text summary</h2>
                <p><strong>Total Words: </strong>{text.split(' ').filter(e => { return e.length>0 } ).length}</p>
                <p><strong>Total Characters: </strong>{text.length}</p>
            </div>
        </div>
    )
}

export default TextForm