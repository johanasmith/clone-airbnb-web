//se debe importar las librerias 
import React from 'react'
import{
    BrowserRouter as Router, Route
}from 'react-router-dom'
import {Routes} from './pages/Routes'


/**
 *
import {Item} from './Item'                  

 export const App = () => (
    <div>
        <h1>Titulo</h1>
        <p>Hola mundo</p>
    </div>
)

const nombre = 'Johana'

const listaNombres =  [
    'Pablo',
    'Mateo',
    'Maria',
    'Lucas'
]

export const App = () => {
    return (
        <div>
            <h1>Titulo</h1>
            <p>Hola mundo {nombre}</p>
            <p>
                {1+2}
            </p>
            <ul>
                {
                    listaNombres.map(el => <Item label = {el}/>)
                }
            </ul>
        </div>
    )
}

*/

export const App = () => {
    return(
        <Router>
            <Routes></Routes>
        </Router>
    )
}



