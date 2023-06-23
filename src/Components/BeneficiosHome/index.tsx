import './style.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img6 from '../../assets/6.png'
import img8 from '../../assets/8.png'
import img10 from '../../assets/10.png'
import img11 from '../../assets/11.png'
import img12 from '../../assets/12.png'
import img13 from '../../assets/13.png'
import Card from '../Card'

const BeneficiosHome: React.FC = () => {
    return(
            <div className="beneficios">
                <h1>Clube de Benefícios</h1>
                <div className="beneficios-bloco2">
                    <Card
                    imagem={img1}
                    titulo="Proteção Veicular"
                    texto="Proteção em casos de colisões, roubos, furtos e 
                    fenômenos da natureza."
                    />
                    <Card
                    imagem={img2}
                    titulo="Cobertura a Terceiros"
                    texto="Oferecemos cobertura a danos eventuais envolvendo 
                    terceiros."
                    />
                </div>
                <div className="beneficios-bloco3">
                <Card
                    imagem={img4}
                    titulo="Proteção de Vidros"
                    texto="Reparo ou substituição de vidros, retrovisores, 
                    faróis e lanternas em oficinas especializadas 
                    nesses componentes."
                    />
                    <Card
                    imagem={img5}
                    titulo="Troca de Pneu"
                    texto="Caso ocorra alguma  eventualidade nos pneus, a 
                    central de Assistência enviará um profissional 
                    para efetuar a troca."
                    />
                    <Card
                    imagem={img6}
                    titulo="Carro Reserva"
                    texto="Será disponibilizado um veículo reserva para o 
                    associado em caso de colisão, por até 7 dias."
                    />
                </div>
                <div className="beneficios-bloco2">
                <Card
                    imagem={img13}
                    titulo="Assistência 24 horas"
                    texto="Envio de reboque pela central de Assistência, 
                    para locomoção do veículo até sua residência ou 
                    oficina  referenciada, hospedagem, retorno a domicílio 
                    (Terrestre, Maritimo ou Aéreo) e chaveiro."
                    />
                    <Card
                    imagem={img8}
                    titulo="Retorno ao Domicílio"
                    texto="Em caso de acidente, roubo ou furto, será enviado 
                    transporte público para retorno do 
                    associado e acompanhantes."
                    />
                </div>
                <div className="beneficios-bloco3">
                <Card
                    imagem={img10}
                    titulo="Sem Análise de Perfil"
                    texto="Sem análise de perfil do condutor ou finalidades 
                    de uso do veículo. Sem consulta ao SPC e Serasa."
                    />
                    <Card
                    imagem={img11}
                    titulo="Proteção APP"
                    texto="Cobertura para acidentes envolvendo os passageiros 
                    do veículo."
                    />
                    <Card
                    imagem={img12}
                    titulo="Mais Coberturas"
                    texto="Assistência funeral e 
                    um Clube de vantagens com descontos exclusivos."
                    />
                </div>
                <h3 style={{
                    textAlign: "center",
                    color: "#000"
                }}>ATENDIMENTO EM TODO TERRITÓRIO NACIONAL</h3>
            </div>
    );
}; export default BeneficiosHome;