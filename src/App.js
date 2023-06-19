import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todosInApp = [
    {rowNumber: 1, rowDescription: 'Feed Old Doggo', rowAssigned: 'Nelso'},
    {rowNumber: 2, rowDescription: 'Water Plants', rowAssigned: 'Father'},
    {rowNumber: 3, rowDescription: 'Cook Dinner', rowAssigned: 'Nelso'}
  ]

  return (
   <div className='mt-5 container'>
    <div className='card'>
      <div className='card-header'>
        Your Todo's
      </div>
      <div className='card-body'>
        <TodoTable
        todos = {todosInApp}
        />
      </div>
    </div>
   </div>
  );
}

export default App;
