import React from 'react'

const StarFill = () => (
    <i className="material-icons">star</i>
)

const StarOutlines = () => (
    <i className="material-icons">star_outline</i>
)

export const Score = ({ puntaje = 0, usuarios = 0 }) => (
    <section className="score">
        <div>
            {
                [1, 2, 3, 4, 5].map((el,key) => el <= puntaje ? <StarFill key={key}/> : <StarOutlines key={key}/>)
            }
        </div>
        <p>{usuarios}</p>

    </section>

)