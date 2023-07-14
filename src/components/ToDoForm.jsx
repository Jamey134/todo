import React, { useState } from 'react'

const ToDoForm = (props) => {
    const { addFunction } = props
    // This is where we create the (task) object that we will send to our task component.
    const [newTask, setNewTask] = useState({
        kTask: ""
    });

    const formSubmit = (e) => {
    //    we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        addFunction(newTask)
        setNewTask({
            kTask:""
        })
    }
    // This will trigger when the user clicks "submit".
    const onSubmitHandler = (e) => {
        const {name, value} = e.target 
        setNewTask(currentData => ({...currentData, [name]:value})) 
    }
 
        // create a javascript object to hold all of the values


// // clears out the input
//         setNewTask("")
//     };





    return (
        <form onSubmit={formSubmit}>
            <label>To-Do List</label>
            <input name = "kTask" type="text" onChange={onSubmitHandler} value={newTask.kTask} />
            <button>Add</button>
        </form>
    )

}
export default ToDoForm;
