import React, { useEffect, useState } from 'react'
import {Title} from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Boton } from '../../components/Boton'
import { FramePage } from '../FramePage'
import { useParams } from 'react-router-dom'
import { requestHttp } from '../../config/HttpRequest'

const botonEstilo = {
    backgroundColor: '#FC642D',
    borderColor: '#fe530c'
}

export const DetailPage = () => {
    const [detailExperience,setDetailExperience] = useState({})
    const {id} = useParams()

    useEffect(() => {       
        const getDetailExperience = async () => {
            try {
                const response = await requestHttp('get', `/experiences/detail/${id}`)
                setDetailExperience(response.experience)
            } catch (error) {
                console.error(error)
            }
        }
        getDetailExperience()       
    },[id])

    return (
        <FramePage>
            <Title label= {detailExperience.titulo}/>
            <CardDetail imagen={detailExperience.imagen} descripcion={detailExperience.descripcion}/>
            <Boton isLink={true} linkTo={`/booking/${id}`} style={botonEstilo} label="¡Reserva Ahora!"/>
        </FramePage>
    )

}

    

/**
 * export const DetailPage = (props) => (
    <FramePage>
       <Title label={props.location.state.lugar} />
       <CardDetail imagen={props.location.state.imagen} descripcion={props.location.state.descripcion}/>
       <Boton isLink={true} linkTo={`/booking/${props.location.state.id}`}style={botonEstilo} label="¡Reserva Ahora!"/>
    </FramePage>
    )
 */
