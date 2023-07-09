import React from "react"
import TodoRowItem from "./TodoRowItem"



function TodoTable(props : {todoOptions: ToDoModel[], deleteTodo: Function} ){
return(
<table className="table table-hover">
    <thead>
        <tr>
            <th scope='col'>#</th>
            <th scope='col'>Description</th>
            <th scope='col'>Assigned</th>
        </tr>
    </thead>
    <tbody>
    {props.todoOptions.map(todo => (
        <TodoRowItem
            key={todo.rowNumber}
            rowNumber = {todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssigned={todo.rowAssigned}
            deleteTodo={props.deleteTodo}
        />
    ))}
    </tbody>
</table>
)
}

export default TodoTable