import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { AnimalProvider } from "./animal/AnimalProvider"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import CustomerList from "./customer/CustomerList"
import EmployeeForm from "./employee/EmployeeForm"
import AnimalForm from "./animal/AnimalForm"
import AnimalDetails from "./animal/AnimalDetails"

export default (props) => {
    return (
        <>
            <LocationProvider>
                <AnimalProvider>
                <EmployeeProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
                </EmployeeProvider>
                </AnimalProvider>
            </LocationProvider>

            <AnimalProvider>
                <LocationProvider>
                    <CustomerProvider>
                    <Route exact path="/animals" render={props => <AnimalList {...props} />} />

                    <Route exact path="/animals/create" render={props => <AnimalForm {...props} />} />

                    <Route exact path="/animals/:animalId(\d+)" render={props => <AnimalDetails {...props} />} />
                    </CustomerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <LocationProvider>
                <Route exact path="/employees" render={props => <EmployeeList {...props} />} />

                <Route exact path="/employees/create" render={props => <EmployeeForm {...props} />} />

                <Route exact path="/employees"></Route>
                </LocationProvider>
            </EmployeeProvider>

            <CustomerProvider>
                {/* Render the animal list when http://localhost:3000/customers */}
                <Route path="/customers">
                    <CustomerList/>
                </Route>
            </CustomerProvider>
        </>
    )
}