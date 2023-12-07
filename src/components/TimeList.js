import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/TimeTable.css';

const TimeTable = () => {
   const [timeTable, setTimeTable] = useState([]);

   useEffect(() => {
       axios.get('http://localhost:8080/tracker_war/api/time')
           .then(response => {
               setTimeTable(response.data.timeTableList);
           })
           .catch(error => {
               console.error('Error fetching data:', error);
           });
   }, []);

   return (
       <div className='time-list'>
       <h1>Time Table</h1>
       <table>
           <thead>
              <tr>
                 <th>Employee ID</th>
                 <th>Task ID</th>
                 <th>Time Start</th>
                 <th>Time End</th>
                 <th>Time Spent</th>
                 <th>Comment</th>
              </tr>
           </thead>
           <tbody>
              {timeTable.map(time => (
                 <tr key={time.id}>
                     <td>{time.employee_id}</td>
                     <td>{time.task_id}</td>
                     <td>{time.time_start}</td>
                     <td>{time.time_end}</td>
                     <td>{time.time_spent}</td>
                     <td>{time.comment}</td>
                 </tr>
              ))}
           </tbody>
       </table>
   </div>
   );
};

export default TimeTable;
