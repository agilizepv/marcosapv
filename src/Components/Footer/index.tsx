import './style.css'
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import logo from '../../assets/logo.jpg'

export default function Footer(){
    return(
        <footer className="footer">
        <div className='logo-footer'>
            <img src={logo} alt=""/>
        </div>
        <div className='meio'>
            <p id='copy'>Copyright &copy; 2023 Agilize - Todos os direitos reservados.</p>
            <p id='frase'>"Deus é nosso refúgio e fortaleza, socorro bem presente na angústia." Sl 46.1</p>
        </div>
        <div className='links-footer'>
           <a href="https://www.facebook.com/profile.php?id=100090493980951" rel="noopener"><img src={facebook} alt=""/></a> 
           <a href="https://www.instagram.com/agilizeof/" rel="noopener"><img src={instagram} alt=""/></a>
           <a href=""><img src={linkedin} alt=""/></a>
        </div>
    </footer>
    )
}