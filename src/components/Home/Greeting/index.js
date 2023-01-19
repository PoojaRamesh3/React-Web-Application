import './index.scss'
import Greet from '../../../assets/images/hi.gif'

const Greeting = () => {
  return (
    <div className="logo-container">
      <img src={Greet} alt="Hello" className="greet" />
    </div>
  )
}
export default Greeting
