import './style.css'
import Img from '../../assets/WhatsIcon.png'

export default function IconWhatsapp(){
    return(
        <div className='positionWhats'>
          <a href="https://wa.me/5517996458123" target='_blanck'> <img src={Img} alt="" /></a>
        </div>
    )
}