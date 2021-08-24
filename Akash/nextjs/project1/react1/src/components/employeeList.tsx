import React from "react";
import { useState } from "react";
import AddToList from "./addEmployee";

export interface dto {
  Employee: {
    Name: String;
    Age: Number;
    Location: String;
    Salary: number;
  }[];
}

function Employee() {

  
  const [employees, setEmployees] = useState<dto["Employee"]>([
    {
      Name: "Akash",
      Age: 23,
      Location: "Chennai",
      Salary: 600000,
    },
    {
      Name: "Akash",
      Age: 23,
      Location: "Chennai",
      Salary: 600000,
    },
  ]);

  return (
    <div>
      <div>
        <AddToList  setemployee = {setEmployees} employee={employees} />
      </div>
      <h2>Employees Data...</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr>
              <td>{}</td>
              <td>{emp.Name}</td>
              <td>{emp.Age}</td>
              <td>{emp.Location}</td>
              <td>{emp.Salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employee;
