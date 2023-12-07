import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/EmployeeList.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/tracker_war/api/employee')
            .then(response => {
                setEmployees(response.data.employeeList);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='employee-list'>
        <h1>Employee List</h1>
        <table>
            <thead>
               <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Surname</th>
                   <th>Login</th>
               </tr>
            </thead>
            <tbody>
               {employees.map(employee => (
                   <tr key={employee.id}>
                       <td>{employee.id}</td>
                       <td>{employee.name}</td>
                       <td>{employee.surname}</td>
                       <td>{employee.login}</td>
                   </tr>
               ))}
            </tbody>
        </table>
    </div>
    );
};

export default EmployeeList;