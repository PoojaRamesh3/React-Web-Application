import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <>
    <div className="navbar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#e8e8e8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#e8e8e8" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#e8e8e8" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pooja--r/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#e8e8e8" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PoojaRamesh3"
          >
            <FontAwesomeIcon icon={faGithub} color="#e8e8e8" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="skype:live:.cid.dc253a482e2db503"
          >
            <FontAwesomeIcon icon={faSkype} color="#e8e8e8" />
          </a>
        </li>
      </ul>
    </div>
  </>
)

export default Sidebar
