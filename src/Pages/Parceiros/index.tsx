import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import CardParceiros from "../../Components/CardParceiros"
import oticaCeles from "../../assets/oticaCeles.jpg"
import magalu from "../../assets/magalu.jpg"
import pernanbucanas from "../../assets/pernanbucanas.jpg"
import unySport from "../../assets/unySport.jpg"
import citycell from '../../assets/citcell.png'
import Hikare from '../../assets/Hikari .jpeg.jpg'
import './style.css'

export default function Parceiros(){
    return(
        <div>
            <Header />
            <main className="mainParceiros">
                <div className="mainBloco">
                    <div>
                        <CardParceiros
                        img={oticaCeles}
                        endereco=" Av. Francisco Jalles, 2366 - Vila Maria, Jales - SP, 15700-000"
                        link="https://www.google.com/maps/place/Celes+%C3%93ticas+-+Loja+01/@-20.2704763,-50.5491308,17z/data=!3m1!4b1!4m6!3m5!1s0x94982ff8ec3f9797:0xb5fd8df39729d216!8m2!3d-20.2704763!4d-50.5475886!16s%2Fg%2F11s9yy82xs?entry=ttu"
                        nomemap="Localização da Ótica Celes no Maps"
                        />
                    </div>
                    <div>
                        <CardParceiros
                        img={magalu}
                        endereco="Av. Francisco Jalles, 2336 - Centro, Jales - SP, 15700-022"
                        link="https://www.google.com/maps/place/Magazine+Luiza/@-20.2702944,-50.5473702,15z/data=!4m6!3m5!1s0x949828cda012a07d:0xcf50c0a858430ec6!8m2!3d-20.2702944!4d-50.5473702!16s%2Fg%2F1tp1zxqr?entry=ttu"
                        nomemap="Localização da Magalu no Maps"
                        />
                    </div>
                    <div>
                        <CardParceiros
                        img={pernanbucanas}
                        endereco="Av. Francisco Jalles, 2367 - Centro, Jales - SP, 15700-000"
                        link="https://www.google.com/maps/place/Pernambucanas/@-20.270396,-50.5476672,15z/data=!4m6!3m5!1s0x94982f26409722c9:0x25df27f8ff66c65!8m2!3d-20.270396!4d-50.5476672!16s%2Fg%2F1tr8mpbh?entry=ttu"
                        nomemap="Localização da Pernambucanas no Maps"
                        />
                    </div>
                </div>
                <div className="mainBloco">
                    <div>
                        <CardParceiros
                        img={unySport}
                        endereco="R. Oito, 2125 - Centro, Jales - SP, 15700-066"
                        link="https://www.google.com/maps/place/R.+Oito,+2125+-+Centro,+Jales+-+SP,+15700-066/@-20.272669,-50.5525713,17z/data=!3m1!4b1!4m6!3m5!1s0x94982f2b8bc6a3dd:0x7e2737436c0b3460!8m2!3d-20.272669!4d-50.5499964!16s%2Fg%2F11kn3553ds?entry=ttu"
                        nomemap="Localização da Uny Sports no Maps"
                        />
                    </div>
                    <div>
                        <CardParceiros
                        img={citycell}
                        endereco="R. Nove, 2309 - Jardim Monterey, Jales - SP, 15700-018"
                        link="https://www.google.com/maps/place/City+Cell+celulares/@-20.2787063,-50.5429802,15z/data=!4m6!3m5!1s0x949829f1fc7a345f:0x5a547c97c2618f63!8m2!3d-20.2787063!4d-50.5429802!16s%2Fg%2F11lm711jv9?entry=ttu"
                        nomemap="Localização da City Cell no Maps"
                        />
                    </div>
                    <div>
                        <CardParceiros
                        img={Hikare}
                        endereco="R. Oito, 2570 - Centro, Jales - SP, 15704-132"
                        link="https://www.google.com/maps/place/HIKARI+COSMETICOS/@-20.2774146,-50.5560866,15z/data=!4m14!1m7!3m6!1s0x94982f151168ee1d:0x55f2ae4e2b9538e0!2sHIKARI+COSMETICOS!8m2!3d-20.2774146!4d-50.5560866!16s%2Fg%2F11gtftjrbr!3m5!1s0x94982f151168ee1d:0x55f2ae4e2b9538e0!8m2!3d-20.2774146!4d-50.5560866!16s%2Fg%2F11gtftjrbr?entry=ttu"
                        nomemap="Localização da Hikare no Maps"
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}