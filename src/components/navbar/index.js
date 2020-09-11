import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Cadastrar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar