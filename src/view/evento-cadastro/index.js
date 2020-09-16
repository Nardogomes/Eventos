import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './evento-cadastro.css'
import NavBar from '../../components/navbar'
import { Link } from 'react-router-dom'

import firebase from '../../config/firebase'

function EventoCadastro() {

    const [msgTipo, setMsgTipo] = useState()

    return(
        <>
        <NavBar/>
        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="mx-auto font-weight-bold">Novo Evento</h3>
            </div>

            <form>

                <div className="form-group">
                    <label>Título:</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Tipo do Evento:</label>
                    <select className="form-control">
                        <option disabled selected value>== Selecione um tipo ==</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Evento</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Descrição do evento:</label>
                    <textarea className="form-control" rows="3" />
                </div>

                <div className="form-group row">
                    <div className="col-6">
                        <label>Data</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="col-6">
                        <label>Hora</label>
                        <input type="time" className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Upload da foto</label>
                    <input type="file" className="form-control" />
                </div>

                <button type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>

            </form>

            <div className="msg-login text-center my-2">
                {msgTipo === 'sucesso' && <span>Evento publicado. &#10004;</span>}
                {msgTipo === 'erro' && <span>Não foi possível publicar o evento. &#9888;</span>}
            </div>

        </div>
        </>
    )
}

export default EventoCadastro