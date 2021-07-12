import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employeeProfile">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in a employee name to begin"
          id="employee"
        />
        <div id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </div>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;