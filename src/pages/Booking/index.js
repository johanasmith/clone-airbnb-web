import React, { useState, useEffect } from 'react'
import { FramePage } from './../FramePage'
import { Boton } from './../../components/Boton'
import { useParams } from 'react-router-dom'
import {requestHttp} from '../../config/HttpRequest'

export const BookingPage = () => {
    const { id } = useParams()
    const [nombres, setName] = useState('')
    const [celularContacto, setPhone] = useState('')
    const [correoContacto, setEmail] = useState('')
    const [fechareserva, setBookingDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)  


    const bookingHandler = (e) =>{
        e.preventDefault()
        requestBooking()
    }

    useEffect(() => {
        setIsValidForm(nombres !=='' && celularContacto !=='' && correoContacto !== '' && fechareserva !== '')
    },[nombres,celularContacto,correoContacto,fechareserva])

    const requestBooking = async () => {
        const body = {
            idLugar : id,
            nombres,
            celularContacto,
            correoContacto,
            fechareserva
        }
        try {           
            const response = await requestHttp('post', '/booking/save',body)
            setIsValidForm(false)
            clean()
            alert(response)
        } catch (error) {
            console.error(error)
        }
    }

    const clean = () =>{
        setName('')
        setPhone('')
        setEmail('')
        setBookingDate('')
    }

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={nombres} onChange={e=>setName(e.target.value)} type="text"/>
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input value={celularContacto} onChange={e=>setPhone(e.target.value)} type="tel" />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={correoContacto} onChange={e=>setEmail(e.target.value)} type="email" />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={fechareserva} onChange={e=>setBookingDate(e.target.value)} type="date" />
                </div>
                <Boton disabled={!isValidForm} type="submit" label="Reserva ahora" />
            </form>

        </FramePage>
    )
}