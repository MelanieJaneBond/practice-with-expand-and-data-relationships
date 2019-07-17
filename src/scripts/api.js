function getEmployeeData() {
    fetch("http://localhost:8080/employees?_expand=computer&_expand=department")
    .then( data => data.json())
}
export {getEmployeeData}