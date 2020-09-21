import React from 'react'
import { Title } from './../../components/Title'
import { Ranking } from './Components/Ranking'
import { FramePage } from '../FramePage'
import { Alternatives } from './Components/Alternatives'


export const HomePage = () => {
    return (
        <FramePage>
            <Title label="Top 5"></Title>
            <Ranking />
            <Title label="Lista" />
            <Alternatives />
        </FramePage>
    )
}