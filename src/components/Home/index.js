import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Greeting from './Greeting'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const Hello = ['H', 'e', 'l', 'l', 'o']
  const nameArray = [' ', 'P', 'o', 'o', 'j', 'a', ' ', 'R']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={Hello}
            idx={22}
          />
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>

        <h2>Full-Stack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME!
        </Link>
      </div>
      <Greeting />
    </div>
  )
}

export default Home
