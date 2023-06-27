import './style.css'

interface eco{
    link: string;
    img: string;
    nomemap: string;
    endereco: string;
}

const CardParceiros: React.FC<eco> = ({link, img, nomemap, endereco}) =>{
    return(
        <div className="cardpar">
            <img src={img} alt="" />
            <a target="_blanck" href={link}>{nomemap}</a>   
            <p>{endereco}</p>  
        </div>
    )
}; export default CardParceiros;