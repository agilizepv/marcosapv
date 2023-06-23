import Header from "../../Components/Header/index.tsx"
import Footer from "../../Components/Footer/index.tsx"
import CardEcommerce from "../../Components/CardEcommerce/index.tsx"
import amazon from '../../assets/Amazon.jpg'
import shopee from '../../assets/shopee.png'
import saraiva from '../../assets/saraiva.jpg'
import submarino from '../../assets/submarino.jpg'
import './style.css'

export default function Ecommerce(){
    return(
        <div>
            <Header />
            <main className="corpo-eco">
                <h1>Esse é o nosso E-commerce, compre com nosso link!</h1>
                <section className="car">
                    <div className="blocoseco">
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
                        link="https://www.amazon.com.br/?&amp;tag=hydrbrabk-20&amp;ref=pd_sl_7rwd1q78df_e&amp;adgrpid=79547423725&amp;hvpone=&amp;hvptwo=&amp;hvadid=591863875878&amp;hvpos=&amp;hvnetw=g&amp;hvrand=4546306419923669377&amp;hvqmt=e&amp;hvdev=c&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=1031748&amp;hvtargid=kwd-10573980&amp;hydadcr=26346_11691057&_encoding=UTF8&tag=31031972-20&linkCode=ur2&linkId=27bab78933bd8228ce6e307a925bb3fd&camp=1789&creative=9325"
                        img={amazon}
                        titulo="Amazon"
                        texto="Compre com o nosso Link"
                        />
                        <CardEcommerce
                        link=""
                        img={saraiva}
                        titulo="AliExpress"
                        texto=""
                        />
                    </div>
                    <div className="blocoseco">
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
                    </div>
                    <div className="blocoseco">
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
                    </div>
                    <div className="blocoseco">
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
                    </div>
                    <div className="blocoseco">
                        <CardEcommerce
                        link=""
                        img={saraiva}
                        titulo="Printful"
                        texto=""
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}