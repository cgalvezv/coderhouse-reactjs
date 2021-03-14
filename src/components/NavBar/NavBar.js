import React, { Component } from 'react'
import CartWidget from './CartWidget'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">    
                <div className="container-fluid">
                    <a className="navbar-brand" href="../../index.js">Deportes Apalta</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Catálogo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosótros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;
