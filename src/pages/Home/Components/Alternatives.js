import React, { useEffect, useState } from 'react'
import { Housing } from './Housing'
import {requestHttp} from '../../../config/HttpRequest'

export const Alternatives = () => {
    const [alternatives,setAlternatives] = useState([])

    useEffect(() => {
        getAllExperiences()
    },[])

    const getAllExperiences = async () => {
        try {
            const response = await requestHttp('get', '/experiences')
            setAlternatives(response.experience)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="Alternatives">
            {
                alternatives.map(el => <Housing  key={el.id}{...el} />)
            }

        </section>
    )
}