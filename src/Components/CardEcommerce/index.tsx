
interface eco{
    link: string;
    img: string;
    titulo: string;
    texto: string;
}

const CardEcommerce: React.FC<eco> = ({link, img, titulo, texto}) =>{
    return(
        <div>
            <a href={link}>
                <img src={img} alt="" /></a>
            <h3>{titulo}</h3>
            <p>{texto}</p>
        </div>
    )
}; export default CardEcommerce;