import imgLogo from "../../assets/pretoLogoTransparente.png"
import IconWhatsapp from "../../Components/IconWhatsapp/index.tsx"
import Header from "../../Components/Header/index.tsx"
import './style.css'
import Footer from "../../Components/Footer/index.tsx"

export default function Institucional(){
    return(
        <div>
            <Header />
            <main className="bodyInstitucional">
                <div className="resolucao">
                    <div className="texto-quemSomos">
                        <IconWhatsapp />
                        <div>
                            <h1>Quem somos?</h1>
                        </div>
                        <div>
                            <p>
                            A Agilize Proteção Veícular é uma associação devidamente regulamentada pelas leis, normas, diretrizes 
                            nacionais e pelo órgão do governo responsável por fiscalizar as empresas de seguimento de proteção veicular do país. 
                            Hoje no Brasil, estamos diante de um cenário onde 75% das motos, 80% dos carros e 60% dos caminhões não possuem nenhum tipo 
                            de cobertura (seja de seguradora ou associação); Pensando nisso nasce a Agilize Proteção Veícular, nascemos com a 
                            proposta de oferecer a melhor cobertura nacional, para atender nossos associados com respeito, agilidade e comprometimento. 
                            Nosso objetivo é que todos possam viver, trabalhar e passear de forma tranquila com um preço justo e que cabe no seu bolso.
                            A melhor Proteção para seu veículo, faça um orçamento e vem para a Agilize!.
                            </p>
                        </div>
                    </div>
                    <div className="imgCarro">
                        <img src={imgLogo} alt="" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}