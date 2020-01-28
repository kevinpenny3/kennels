import React, { useContext } from "react"
import { LocationContext } from "./LocationProvider"
import Location from "./Location"
import "./Locations.css"
import { EmployeeContext } from "../employee/EmployeeProvider"
import { AnimalContext } from "../animal/AnimalProvider"


export default () => {
    const { locations } = useContext(LocationContext)
    const { employees } = useContext(EmployeeContext)
    const { animals } = useContext(AnimalContext)

    return (
        <div className="locations">
        {
            locations.map(loc => {
                const employeesHere = employees.filter(
                    (employee) => {
                    return loc.id === employee.locationId
                }
                )
                const animalsHere = animals.filter(
                    (animal) => {
                        return loc.id === animal.locationId
                    }
                )
            return <Location key = {loc.id} 
                            employees = {employeesHere}
                            location = {loc}
                            animals = {animalsHere}
                             />
            })
        }
        </div>
    )
}