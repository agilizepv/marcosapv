import Header from "../../Components/Header/index.tsx"
import Footer from "../../Components/Footer/index.tsx"
import CardEcommerce from "../../Components/CardEcommerce/index.tsx"
import MercadoLivre from '../../assets/MercadoLivre.jpg'
import amazon from '../../assets/Amazon.jpg'
import shopee from '../../assets/shopee.png'
import saraiva from '../../assets/saraiva.jpg'
import submarino from '../../assets/submarino.jpg'

export default function Ecommerce(){
    return(
        <div>
            <Header />
            <main className="corpo-eco">
                <h1>Esse é o nosso E-commerce, compre com nosso link!</h1>
                <section className="car">
                    <CardEcommerce
                    link=""
                    img={MercadoLivre}
                    titulo= "Mercado Livre"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="shein"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={shopee}
                    titulo="shopee"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={amazon}
                    titulo="Amazon"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="AliExpress"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Americanas"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={submarino}
                    titulo="Submarino"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Magazine Luíza"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Casas Bahia"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Pernanbucanas"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Saraiva"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="HotMart"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Eduzz"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Monetizze"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="ShareASale"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="eBay"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="CLICKBANK"
                    texto=""
                    />
                    <CardEcommerce
                    link=""
                    img={saraiva}
                    titulo="Printful"
                    texto=""
                    />
                </section>
            </main>
            <Footer />
        </div>
    )
}