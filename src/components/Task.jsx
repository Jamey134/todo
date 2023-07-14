import React, { useState } from 'react'

const Task = (props) => {
    const { task, id, removeFunction} = props
    const [checked, setChecked] = React.useState([])


    const handleChange = () => {
    setChecked(!checked)
    }
    return (
        <div className='line'>
            <input type="checkbox" id = "lineThru" checked = {!checked} onChange={handleChange} />
            <label for = "lineThru" >{task}</label>
            <button onClick={() => removeFunction(id)} >Delete</button>
        </div>
    )
}

export default Task