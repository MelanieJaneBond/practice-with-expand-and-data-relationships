import {getEmployeeData} from "./database.json"

// console.log("Your Webpack application is set up and ready to go. Please start writing code.")
// A small business wants to keep track of its employees and the computers that they use.
//Each employee is assigned to a department, and they each get assigned a computer when they join the company.

// Build arrays of objects that represent Employees, Departments, and Computers.
// Assign every resource a unique id property.
// Assign each employee to a department using a foreign key.
// Assign each employee a computer using a foreign key.
// Once your data is normalized, use your DOM skills to display a card for each employee.
//It should display the employee name, the name of their department, and which computer they are using

let employeeName = document.querySelector(".employee")
let departmentName = document.querySelector(".employee_department")
let computerName = document.querySelector(".employee_computer")

function addNameToForm(employee) {
let h1 = document.createElement("h1")
employeeName.appendChild(h1)
h1.textContent = employee.name
}
addNameToForm(getEmployeeData())

//do I need a forEach loop? How do I add the .then and put the loop in there?
//I saw some things like this in the lego project but I've no idea where that is at the moment...



{/* <article class="employee">
    <header class="employee_name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee_department">
        Works in the IT department
    </section>
    <section class="employee_computer">
        Currently using a 2015 MacBook Pro
    </section>
</article> */}