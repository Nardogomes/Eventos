import React from 'react'
import './login.css'

function Login() {
    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>
                </div>
                
                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email"/>
                
                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha"/>
                
                <button className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
                
                <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
            </form>
        </div>
    )
}

export default Login