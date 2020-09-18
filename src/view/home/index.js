import React, { useState } from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from '../../components/navbar/'
import EventoCard from '../../components/evento-card/'

function Home() {
    return(
        <>
            <NavBar/>
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
            <div className="row">
                <EventoCard/>
            </div>
        </>
    )
}

export default Home