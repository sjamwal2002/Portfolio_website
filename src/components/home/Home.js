import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown' ;
import AboutImg from "../../assets/about.jpg";

const Home = () => {
  return (
    
     <section className='home section' id="home">
        <div className='home__container container grid'>
           <div className='home__content grid'>
             <Social/>
             <div className='home__img'>
                <img src={AboutImg} alt="logo" />
             </div>
             <Data/>
           </div>
           <ScrollDown/>
        </div>
     </section>
   
    
  )
}

export default Home;
