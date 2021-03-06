import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName='active' className="nav-link" to="/">Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to="/list-movie">List Movie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to="/hoc">HocPage</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName='active' className="nav-link" to="/hooks">HooksPage</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
