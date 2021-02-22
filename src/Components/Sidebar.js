import React from 'react'
import "./Sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Industrial Served</h2>
                <ul className="list">
                    <li>Medical</li>
                    <li>Aerospace and Defense</li>
                    <li>Automotive</li>
                </ul>
            <h2>Capabilities</h2>
                <ul className="list">
                    <li>Rapid Prototyping</li>
                    <li>Custom Cable Builds</li>
                    <li>Automotive Wiring</li>
                    <li>Aerospace Wiring</li>
                </ul>
        </div>
    )
}

export default Sidebar
