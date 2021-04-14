import React, { useEffect, useState } from 'react'
import CartWidget from '../../components/CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { getCategories } from '../../db/firebase'

const NavBar = () => {
    const [ menu, setMenu ] = useState([
        {
            to: '/',
            name: 'Home',
            key: 0
        }
    ])
    
    useEffect(() => {
        getCategories().get().then((querySnapshot) => {
            const categoriesMenu = querySnapshot.docs.map(doc => {
               return {  to: `/category/${doc.data().key}`,  ...doc.data()}
            });
            setMenu([ ...menu, ...categoriesMenu])
        })
    }, [])


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">    
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Deportes Apalta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <div className="navbar-nav">
                        { menu.map(item => <Link key={`menu-key-${item.key}`} className="nav-item nav-link" to={item.to}>{item.name}</Link> ) }
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
