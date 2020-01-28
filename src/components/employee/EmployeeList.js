import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employees.css"
import { LocationContext } from "../location/LocationProvider"

export default (props) => {
    const { employees } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    

        return (
            <div className="employees">
                <h1>Employees</h1>
                <button className="createEmployeeButton" onClick={() => props.history.push("/employees/create")}>
                    Add Employee
                </button>
                <article className="employeeList">
                    {
                    employees.map(employee => {
                        const foundedLocation = locations.find(
                            (location) => {
                                return location.id === employee.locationId
                            }
                        )
                        return <Employee key={employee.id} 
                                         location={foundedLocation} 
                                         employee={employee} />
})
}
                </article>
            </div>
        )
}