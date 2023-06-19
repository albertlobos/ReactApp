import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const [todoOptions, setTodoOptions] = useState([
    {rowNumber: 1, rowDescription: 'Feed Old Doggo', rowAssigned: 'Nelso'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'Father'},
    {rowNumber: 3, rowDescription: 'Cook Dinner', rowAssigned: 'Nelso'},
    {rowNumber: 4, rowDescription: 'Sweep House', rowAssigned: 'Yogi'},
    {rowNumber: 5, rowDescription: 'Practice React', rowAssigned: 'Albert'},
    {rowNumber: 6, rowDescription: 'Mop Home', rowAssigned: 'Albert'}
  ]
  )

  const addTodo = () => {
    if (todoOptions.length > 0){
      const newTodo = {
      rowNumber: todoOptions.length + 1, 
      rowDescription: 'New Todo',
      rowAssigned: 'User Three'
      };

      setTodoOptions(todoOptions => [...todoOptions, newTodo]);
      
    }

  }

  return (
   <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Your Todo's
      </div>
      <div className='card-body'>
        <TodoTable todos = {todoOptions}/>

        <button className = 'btn btn-primary' onClick = {addTodo}>
          Add New Todo
        </button>

      </div>
    </div>
   </div>
  );
}

export default App;
