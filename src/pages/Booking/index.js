import React, { useState, useEffect } from 'react'
import { FramePage } from './../FramePage'
import { Boton } from './../../components/Boton'
import { useParams } from 'react-router-dom'

export const BookingPage = () => {
    const { id } = useParams()
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [bookingDate, setBookingDate] = useState('')
    const [isValidForm, setIsValidForm] = useState(false)  

    const bookingHandler = (e) =>{
        e.preventDefault()
        requestBooking()
    }

    const requestBooking = () => {
        const body = {
            id,
            name,   //name : name
            phone,
            email,
            bookingDate
        }
        console.log('body', body)
    }

    useEffect(() => {
        setIsValidForm(name !=='' && phone !=='' && email !== '' && bookingDate !== '')
    },[name,phone,email,bookingDate])

    return (
        <FramePage>
            <form onSubmit={bookingHandler} className="booking-form">
                <div>
                    <label>Nombre:</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text"/>
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)} type="tel" />
                </div>
                <div>
                    <label>Correo:</label>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
                </div>
                <div>
                    <label>Fecha de reserva:</label>
                    <input value={bookingDate} onChange={e=>setBookingDate(e.target.value)} type="date" />
                </div>
                <Boton disabled={!isValidForm} type="submit" label="Reserva ahora" />
            </form>

        </FramePage>
    )
}