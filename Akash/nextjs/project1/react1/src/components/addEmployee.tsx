import {dto } from "./employeeList"
import { useState } from "react";

interface IProps {
    setemployee: React.Dispatch<React.SetStateAction<dto["Employee"]>>
    employee: dto["Employee"]
}
const AddToList: React.FC<IProps> = ({ setemployee , employee }) => {

  const [input, setInput] = useState({
    Name: "",
    Age: "",
    Location: "",
    Salary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.Name || !input.Age) return;

    setemployee([
      ...employee,
      {
        Name: input.Name,
        Age: parseInt(input.Age),
        Location: input.Location,
        Salary: parseInt(input.Salary),
      },
    ]);

    setInput({
      Name: "",
      Age: "",
      Location: "",
      Salary: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.Name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.Age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="Location"
        value={input.Location}
        placeholder="Location"
      />
      <input
        type="number"
        onChange={handleChange}
        className="AddToList-input"
        name="Salary"
        value={input.Salary}
        placeholder="Salary"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
