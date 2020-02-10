import React from 'react'
import Toggle from './Toggle'
import SliderCard from './SliderCard'
import SelectCard from './SelectCard'
import './Dashboard.css'

const Dashboard = () => {

    
    return (
        <div>
            <h1>Welcome to My Music App</h1>
            <div className= 'dashboard-container'>
            <div className='box-1'><p><Toggle /></p></div>
            <div className='box-2'><p><SliderCard /></p></div>
            <div className='box-3'><p><SelectCard /></p></div>
           </div>
        </div>
    )
}

export default Dashboard