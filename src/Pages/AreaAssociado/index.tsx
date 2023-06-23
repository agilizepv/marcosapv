import './style.css'
import IconWhatsapp from '../../Components/IconWhatsapp/index.tsx';
import Header from '../../Components/Header/index.tsx';
import imgLogo from "../../assets/pretoLogoTransparente.png"

const AreaAssociado: React.FC = () => {
    return(
        <div>
            <Header />
            <main className='corpo-asso'>
                <IconWhatsapp />
                <div className='caixa-apar'>
                    <div className='formulario'>
                        <h1>Área Associado</h1>
                        <div className='form'>
                            <form action="" id='formAssociado' method="post">
                                <div>
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" id='cpf' name='cpf' placeholder='Digite aqui seu CPF'/>
                                </div>
                                <button type="submit">Entrar</button>
                            </form>
                        </div>
                    </div>
                    <div className='img-area'>
                        <img src={imgLogo} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
}; export default AreaAssociado;