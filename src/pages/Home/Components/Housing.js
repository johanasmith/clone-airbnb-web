import React from 'react'
import { Score } from './../../../components/Score'
import { Link } from 'react-router-dom'

export const Housing = ({ id, puntaje, usuarios, lugar, imagen, titulo }) => (
    <Link className="link" to={{
        pathname: `/detail/${id}`,
        state: { imagen: imagen, titulo: titulo, lugar: lugar }
    }}>
        <section className="housing">
            <img alt="" src={imagen}></img>
            <div>
                <h3>{titulo}</h3>
                <h6>{lugar}</h6>
                <Score puntaje={puntaje} usuarios={usuarios} />
            </div>
        </section>
    </Link>
)