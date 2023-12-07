import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TaskList.css';

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
     
    useEffect(() => {
        axios.get('http://localhost:8080/tracker_war/api/task')
            .then(response => {
                setTasks(response.data.taskList);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    return (
        <div className='task-list'>
           <h1>Task List</h1>
           <table>
               <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Description</th>
                  </tr>
               </thead>
               <tbody>
                  {tasks.map(task => (
                      <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.name}</td>
                          <td>{task.description}</td>
                      </tr>
                  ))}
               </tbody>
           </table>
       </div>
    );
};

export default TasksPage;
