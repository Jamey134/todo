import './App.css';
import ToDoForm from './components/ToDoForm';
import Task from './components/Task';
// import List from './components/List';
import React, { useState } from 'react'

function App() {
  const [storeItem, setStoreItem] = useState([])

  // add function
  const newItem = (item) => {
    setStoreItem((currentData) => ([...currentData, item]) )
  };
  // remove function
  const removeItem = id => {
    let left = storeItem.slice(0, id)
    let right = storeItem.slice(id +1)
    setStoreItem(left.concat(right))
  }


  
  return (
    <div className="App">
      <ToDoForm addFunction = {newItem} />
      {
        storeItem.map((t, i) => {
          return(
            <Task key = {i} id = {i} removeFunction = {removeItem} task = {t.kTask} ></Task>
          )
        })
      }
    </div>
  );
}

export default App;
