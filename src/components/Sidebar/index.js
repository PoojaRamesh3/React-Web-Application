import './index.scss'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
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
      <Link className="logo">
        <img src={Logo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="LogoSubtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/pooja--r/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PoojaRamesh3"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="skype:live:.cid.dc253a482e2db503"
          >
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  </>
)

export default Sidebar
