import React from 'react'
import Task from './Task'
const List = (props) => {
    const { storeItem } = props
    return (
        <div>
            <p>{storeItem}</p>
            <Task>

            </Task>
        </div>
    )
}

export default List