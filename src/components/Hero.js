import React from 'react'
import './Hero.css'
import photo_grid from '../images/photo-grid.png'

export default function Hero(){
    return(
        <>
        <container className='hero'>
         <img src={photo_grid} alt="Grid" srcset="" />
            <h1>Online Experiences</h1>
            <p> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
            </container>
        </>
    )
}