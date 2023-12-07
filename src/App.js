// App.js
import React from 'react';
import EmployeesList from './components/employeeList.js';
import TaskList from './components/taskList.js';
import TimeList from './components/TimeList.js';

function App() {
  return (
      <div className="App">
        <EmployeesList />
        <TaskList />
        <TimeList />
      </div>
  );
}

export default App;