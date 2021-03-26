import React from 'react'
import CartWidget from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">    
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Deportes Apalta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to={`/category/${1}`}>
                            Categoría 1
                        </Link>
                        <Link className="nav-item nav-link" to={`/category/${2}`}>
                            Categoría 2
                        </Link>
                    </div>
                </div>
                <div className="d-flex">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar
