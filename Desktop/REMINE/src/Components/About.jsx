import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p>It is inolved in Recycling of metal waste and scrap from rejected aluminum, utensil, containers and other used metallic items etc. Collection of metal waste and scrap for and other used metallic items etc.</p>
            <button> {props.button} </button>
        </div>
    </div>
  )
}

export default About