import React from "react"
import "./Locations.css"

export default ({ location, employees, animals }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <address className="location__address">{location.address}</address>
        <div className="employees">{employees.length}</div>
        <div className="animals">{animals.length}</div>
    </section>
)