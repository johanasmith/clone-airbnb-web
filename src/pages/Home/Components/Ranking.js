import React,{ useEffect, useState } from 'react'
import { Cards } from './Cards'
import { requestHttp } from '../../../config/HttpRequest'

export const Ranking = () => {
    const [top5,setTop5] = useState([])

    useEffect(() => {
        getTop5Experiences()
    },[])

    const getTop5Experiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences/top5')
            setTop5(response.top5)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="ranking">
            {
                top5.map(el => <Cards key={el.id} id={el.id} imagen={el.imagen} titulo={el.titulo} lugar={el.lugar} puntaje={el.puntaje} />)
            }
        </section>
    )
}
