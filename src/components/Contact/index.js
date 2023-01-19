import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import React, { useState } from 'react'

const Contact = () => {
  const [letterClass] = useState('text-animate')
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
      </div>
    </div>
  )
}

export default Contact
