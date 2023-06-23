import './style.css'

interface eco{
    link: string;
    img: string;
    titulo: string;
    texto: string;
}

const CardEcommerce: React.FC<eco> = ({link, img, titulo, texto}) =>{
    return(
        <div className="cardeco">
            <img src={img} alt="" />
            <h3>{titulo}</h3>
            <a target="_blanck" href={link}>{texto}</a>     
        </div>
    )
}; export default CardEcommerce;