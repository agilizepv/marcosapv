import './style.css'
import imgTelefone from '../../assets/telefone.png'
import imgMensagem from '../../assets/mensagem.png'


const ContatosHome: React.FC = () =>{
    return(
        <div className="contato">
                <div className="contatos">
                    <p>Fale Conosco</p>
                    <h2>Tem alguma dúvida?</h2>
                    
                    <div className="flex">
                        <img src={imgTelefone} alt=""/>
                        <div >
                            <h3>17 99645-8123</h3> 
                            <p>Contato Agilize</p>
                        </div>  
                    </div>
                    <div className="flex">
                        <img src={imgMensagem} alt=""/>
                        <div>
                            <h3>apvjales@gmail.com</h3>
                            <p>Email Agilize</p>
                        </div>
                    </div>
                </div>            
        </div>      
    );
}; export default ContatosHome;