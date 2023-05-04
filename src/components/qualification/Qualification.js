import React,{useState} from 'react'
import './qualification.css'

const Qualification = () => {
    
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personal journey</span>

        
        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div 
                   className=
                    "qualification__button qualification__active button--flex" >

                    <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
                    Education
                </div>

                
            </div>
            <div className='qualification__sections'>
                <div className="qualification__content qualification__content-active">
                    <div className='qualification__data '>
                        <div>
                            <h3 className='qualification__title'>CSE</h3>
                            <p className='qualification__subtitle'>Chitkara University</p>
                            <p>2020-Present</p> 
                            
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                    <div className='qualification__data '> 
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>12th</h3>
                            <p className='qualification__subtitle'>Rainbow International School</p>
                            <p>2019-2020</p>
                            
                        </div>
                    </div>

                    <div className='qualification__data '>
                        <div>
                            <h3 className='qualification__title'>10th </h3>
                            <span className='qualification__subtitle'>Rainbow International School</span>
                            <p>2017-2018</p>
                            
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification
