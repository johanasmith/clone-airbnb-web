import React from 'react'

export const CardDetail = (props) => (
    <article className="card-detail">
        <img src={props.imagen} alt={props.descripcion}/>
        <p>{props.descripcion}</p>
    </article>
)