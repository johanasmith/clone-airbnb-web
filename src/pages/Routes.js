import React from 'react'
import{
    Switch,
    Route
}from 'react-router-dom'
import { HomePage } from './Home'
import { DetailPage } from './Detail'
import { BookingPage } from './Booking'


export const Routes = () => (
    <Switch>
        <Route path="/" exact component= {HomePage} />
        <Route path="/detail/:id" render={(props) => <DetailPage {...props}/>}/>
        <Route path="/booking/:id" component= {BookingPage} />  
    </Switch>
)