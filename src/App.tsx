import React, {useState} from 'react';
import './App.css';
import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';
//import AccordionMenu from './components/AccordionMenu';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todoOptions, setTodoOptions] = useState([
    {rowNumber: 1, rowDescription: 'Feed Old Doggo', rowAssigned: 'Nelso'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'Father'},
    {rowNumber: 3, rowDescription: 'Cook Dinner', rowAssigned: 'Nelso'},
    {rowNumber: 4, rowDescription: 'Sweep House', rowAssigned: 'Yogi'}
  ]
  )

  const addTodo = (description: string, assigned: string) => {
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

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todoOptions.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodoOptions(filtered);
  }

  return (
   <div className='mt-5 container'>
    <div className='card'>
      
      <div className='card-header'>
        Your Todo's
      </div>

      <div className='card-body'>
        <TodoTable todoOptions = {todoOptions} deleteTodo = {deleteTodo}/>

        <button 
        className = 'btn btn-primary'
        onClick={() => setShowAddTodoForm(!showAddTodoForm)}>
        {showAddTodoForm? 'Close New Todo': 'New Todo'}
        </button>

        {showAddTodoForm &&
          <NewTodoForm addTodo={addTodo}/>
        }

      {/* <AccordionMenu/> */}
      </div>
    </div>
   </div>
  );
}
