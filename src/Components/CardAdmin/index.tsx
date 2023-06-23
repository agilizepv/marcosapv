
import { Link } from 'react-router-dom';
import './style.css'

interface CardsAdministrativo{
    imagem: string;
    titulo: string;
    texto: string;
    link: string;
    textoBotao: string;
}

const CardAdmin: React.FC<CardsAdministrativo> = ({imagem, titulo, texto, link, textoBotao}) => {
    return(
        <div className="card-admin">
            <div className='campos'>
                <img src={imagem} alt=""/>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
            <div className='botao'>
                <Link to={link}>{textoBotao}</Link>
            </div>
        </div>
    );
}; export default CardAdmin;