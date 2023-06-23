import BeneficiosHome from '../../Components/BeneficiosHome/index.tsx'
import ContatosHome from '../../Components/ContatosHome/index.tsx'
import LocalizacaoHome from '../../Components/LocalizacaoHome/index.tsx'
import imgCapa from '../../assets/capaAgilize.jpg'
import imgAutomoveis from '../../assets/imgAutomoveis.jpg'
import './style.css'
import CardAdmin from '../../Components/CardAdmin/index.tsx'
import imgBoleto from '../../assets/boleto.png'
import imgCliente from '../../assets/cliente.png'
import IconWhatsapp from '../../Components/IconWhatsapp/index.tsx'
import Header from '../../Components/Header/index.tsx'
import Footer from '../../Components/Footer/index.tsx'

const Home: React.FC = () => {
    return(
        <div>
            <Header />
            <main>
                <section className="capa-img">
                    <img style={{width: "100%", marginTop: "5em"}} src={imgCapa} alt=""/>
                </section>
                <section>
                    <BeneficiosHome />
                </section>
                <section>
                    <img style={{width: "100%"}} src={imgAutomoveis} alt="" />
                </section>
                <section className="administrativo">

                <div className="titulo-administrativo">
                    <h1>Acesso Rápido</h1>
                </div>
                <div className="p-administrativo">
                    <p>Painel Administrativo</p>
                </div>
                <div className="cards">
                    <CardAdmin
                    imagem={imgBoleto}
                    titulo='2° via do Boleto'
                    texto='Emita sua 2° via do boleto'
                    link='/area-associado'
                    textoBotao='Solicitar'
                    />
                    <CardAdmin
                    imagem={imgCliente}
                    titulo='Área do Associado'
                    texto='Entre no seu painel administrativo'
                    link='/area-associado'
                    textoBotao='Entrar'
                    />
                </div>
                </section>
                <IconWhatsapp />
                <section>
                    <ContatosHome />
                </section>
                <section>
                    <LocalizacaoHome />
                </section>
            </main>
            <Footer />
        </div>
    );
}; export default Home;