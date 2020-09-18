import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './evento-card.css'

function EventoCard() {
    return(
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/100x50" className="card-img-top img-cartao" alt="Imagem do evento." />
            
            <div className="card-body">
                <h5>Título do evento</h5>
                <p className="card-text text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit. Eleifend quam adipiscing vitae proin. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Egestas fringilla phasellus faucibus scelerisque. Turpis in eu mi bibendum neque egestas congue quisque egestas.
                </p>

                <div className="row rodape-card d-flex align-items-center">
                    <div className="col-6">
                        <Link to="/" clasName="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i><span>2020</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EventoCard