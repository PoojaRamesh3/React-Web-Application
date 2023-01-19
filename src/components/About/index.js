import './index.scss'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

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

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face3">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face1">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faReact} color="#0354a6" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faGitAlt} color="#f34f29" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faSass} color="#c69" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
