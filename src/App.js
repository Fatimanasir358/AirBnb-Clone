import React from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import airbnbdata from './airbnbdata'
import Hero from './components/Hero'

export default function App(){
    const cards = airbnbdata.map(element =>{
            return(
                <Card
                key={element.id}
                {...element}
                //element={element}
                // img={elements.coverImg}
                // rating={elements.stats.rating}
                // count={elements.stats.reviewCount}
                // title={elements.title}
                // price={elements.price}
                // location={elements.location}
                // openSpots={elements.openSpots}
                />
        )
    })
    return(
        <>
        <NavBar/>
        <Hero/>
        <section className="cards-list">
                {cards}
            </section>
        
        </>
    )
}