import React from 'react'
import {Link} from 'react-router-dom'

export const Cards = (props) => (
    <Link className="link" to={{
        pathname: `/detail/${props.id}`,
        state: { imagen: props.imagen, titulo: props.titulo, lugar:props.lugar }
      }}>
        <article style={{backgroundImage: `url(${props.imagen})` }}>
            <h2>{props.titulo}</h2>
            <h6>{props.lugar}</h6>
        </article>
    </Link>       
)