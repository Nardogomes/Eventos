import React, { useState } from 'react'
import './login.css'
import firebase from '../../config/firebase'
import 'firebase/auth'

function Login() {

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(resultado => {
                alert('Usuário logado')
            }).catch(erro => {
                alert(erro)
            })
    }

    return(
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>
                </div>
                
                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"/>
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha"/>
                
                <button className="btn btn-lg btn-login btn-block" type="button" onClick={logar}>Logar</button>
                
                <div className="msg-login text-white text-center my-5">
                    <span>Você está conectado. &#10004;</span>
                    <span>Usuário ou senha incorretos. &#9888;</span>
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <a href="/index.html" className="mx-2">Recuperar senha</a>
                    <span className="text-white">&#9830;</span>
                    <a href="/index.html" className="mx-2">Quero cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login