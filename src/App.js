import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todoOptions, setTodoOptions] = useState([
    {rowNumber: 1, rowDescription: 'Feed Old Doggo', rowAssigned: 'Nelso'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'Father'},
    {rowNumber: 3, rowDescription: 'Cook Dinner', rowAssigned: 'Nelso'},
    {rowNumber: 4, rowDescription: 'Sweep House', rowAssigned: 'Yogi'}
  ]
  )

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todoOptions.length > 0){
      rowNumber = todoOptions[todoOptions.length-1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber, 
      rowDescription: description,
      rowAssigned: assigned
      };

      setTodoOptions(todoOptions => [...todoOptions, newTodo]);

  }

  return (
   <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Your Todo's
      </div>
      <div className='card-body'>
        <TodoTable todos = {todoOptions}/>

        <button 
        className = 'btn btn-primary' 
        onClick = {addTodo}>
          Add New Todo
        </button>

        <NewTodoForm addTodo={addTodo}/>

      </div>
    </div>
   </div>
  );
}

export default App;
