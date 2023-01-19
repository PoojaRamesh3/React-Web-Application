import './index.scss'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass] = useState('text-animate')
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p className="about-me">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          totam minima dolorem, ut odit non labore et voluptatibus esse
          reprehenderit doloribus error rerum fugit nulla eos reiciendis sed
          itaque eveniet?
        </p>
        <p className="about-me">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          totam minima dolorem, ut odit non labore et voluptatibus esse
          reprehenderit doloribus error rerum fugit nulla eos reiciendis sed
          itaque eveniet?
        </p>
        <p className="about-me">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          totam minima dolorem, ut odit non labore et voluptatibus esse
          reprehenderit doloribus error rerum fugit nulla eos reiciendis sed
          itaque eveniet?
        </p>
      </div>
    </div>
  )
}

export default About
