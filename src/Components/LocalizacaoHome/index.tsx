import './style.css'

const LocalizacaoHome: React.FC = () => {
    return(
        <div className="localizacao">
            <h1>Agilize Proteção Veicular</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2151.0207163687965!2d-50.539543309350165!3d-20.268757496684522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94982f16cd91b911%3A0x559924969147a215!2sAgilize%20Prote%C3%A7%C3%A3o%20Veicular!5e0!3m2!1spt-BR!2sbr!4v1685032021431!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border: "0"}} loading="lazy"></iframe>
        </div>
    );
}; export default LocalizacaoHome;