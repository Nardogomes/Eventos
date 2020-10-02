import React from 'react'
import './evento-detalhes.css'
import {Link} from 'react-router-dom'
import firebase from '../../config/firebase'
import { useSelector } from 'react-redux'
import NavBar from '../../components/navbar/'

function EventoDetalhes(props) {

    const [evento, setEvento] = React.useState({})
    const [urlImg, setUrlImg] = React.useState({})
    const usuarioLogado = useSelector(state => state.usuarioEmail)

    React.useEffect(() => {
        firebase.firestore().collection('eventos').doc(props.match.params.id).get().then(resultado => {
            setEvento(resultado.data())
            firebase.storage().ref(`imagens/${evento.foto}`).getDownloadURL().then(url => setUrlImg(url))
        })
    })

    return(
        <>
            <NavBar/>
            <div className="container-fluid">
                <div className="row">
                    <img src={urlImg} className="img-banner" alt="Banner" />

                    <div className="col-12 text-right mt-1 visualizacoes">
                        <i className="fas fa-eye"> <span>{evento.visualizacoes}</span></i>
                    </div>

                    <h3 className="mx-auto mt-5 titulo"><strong>{evento.titulo}</strong></h3>
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">{evento.tipo}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">{evento.data}</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">{evento.hora}</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <div className="col-12 text-center">
                        <h5><strong>Detalhes do Evento</strong></h5>
                    </div>
                    <div className="col-12 text-center">
                        <p className="p-3">{evento.detalhes}</p>
                    </div>
                </div>

                {
                    usuarioLogado === evento.usuario ?
                    <Link to='' className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
                    : ''
                }

            </div>
        </>
    )
}

export default EventoDetalhes