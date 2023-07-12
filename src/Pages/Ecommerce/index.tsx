import Header from "../../Components/Header/index.tsx"
import Footer from "../../Components/Footer/index.tsx"
import CardEcommerce from "../../Components/CardEcommerce/index.tsx"
import amazon from '../../assets/Amazon.jpg'
import descomplica from '../../assets/descomplica.jpg'
import decathlon from '../../assets/dacathlon.jpg'
import usaflex from '../../assets/Usaflex.jpg'
//import shopee from '../../assets/shopee.png'
//import saraiva from '../../assets/saraiva.jpg'
//import submarino from '../../assets/submarino.jpg'
//import magalulogo from "../../assets/magalu-logo.png"

import Nike from '../../assets/nike.jpg'
import './style.css'

export default function Ecommerce() {
    return (
        <div>
            <Header />
            <main className="corpo-eco">
                <h1>Esse é o nosso E-commerce, compre com nosso link!</h1>
                <section className="car">
                    <div className="blocoseco">
                        <div className="blocoseco-3">
                            <CardEcommerce
                                link="https://www.amazon.com.br/?&amp;tag=hydrbrabk-20&amp;ref=pd_sl_7rwd1q78df_e&amp;adgrpid=79547423725&amp;hvpone=&amp;hvptwo=&amp;hvadid=591863875878&amp;hvpos=&amp;hvnetw=g&amp;hvrand=4546306419923669377&amp;hvqmt=e&amp;hvdev=c&amp;hvdvcmdl=&amp;hvlocint=&amp;hvlocphy=1031748&amp;hvtargid=kwd-10573980&amp;hydadcr=26346_11691057&_encoding=UTF8&tag=31031972-20&linkCode=ur2&linkId=27bab78933bd8228ce6e307a925bb3fd&camp=1789&creative=9325"
                                img={amazon}
                                titulo="Amazon"
                                texto="Compre com o nosso Link"
                            />
                        </div>
                        <div className="blocoseco-3">
                            <CardEcommerce
                                link="https://www.nike.com.br/?utm_source=socialsoul&utm_medium=34476053&utm_content=&utm_campaign=Agilize%20Protecao%20Veicular&lmdsid=NTkwMSwzNzk3OTU5NCwxNjg5MTA1ODY0OTYyLG51bGwsNzg5NywxOTI2MzFjYTI3ZSwlmdhjacfrlaalrfweal"
                                img={Nike}
                                titulo="Nike"
                                texto="Compre com o nosso link!"
                            />
                        </div>
                        <div className="blocoseco-3">
                            <CardEcommerce
                                link="https://descomplica.com.br/vestibulares/enem/?utm_source=lomadee&utm_medium=display&utm_campaign=lomadee-vest-junho-2022&utm_content=lomadee_34476053&bo=1&sc=1&gtcontent=34476053&lmdsid=NjU3NywzNzk3OTU5NCwxNjg5MTg0ODcxODM1LG51bGwsNzg5NywxOTI3NDA2NTYzMCwlmdhjacfrlaalrfweal"
                                img={descomplica}
                                titulo="Descomplica"
                                texto="Compre com o nosso link!"
                            />
                        </div>
                    </div>
                    <div className="blocoseco">
                        <div className="blocoseco-3">
                            <CardEcommerce
                                link="https://www.decathlon.com.br/?utm_source=lomadee&utm_medium=afiliado&utm_campaign=cpa&lmdsid=NjE0OSwzNzk3OTU5NCwxNjg5MTg0OTUwNzc1LG51bGwsNzg5NywxOTMwYjU1ZTQxZCwlmdhjacfrlaalrfweal"
                                img={decathlon}
                                titulo="Decathlon"
                                texto="Compre com o nosso link!"
                            />
                        </div>
                        <div className="blocoseco-3">
                            <CardEcommerce
                                link="https://www.usaflex.com.br/?utm_source=lomadee&utm_term=34476053&utm_medium=afiliado&utm_campaign=cpa&lmdsid=NjM1OCwzNzk3OTU5NCwxNjg5MTg1MDA1Mjc5LG51bGwsNzg5NywxOTNlZDNkMjlmYywlmdhjacfrlaalrfweal"
                                img={usaflex}
                                titulo="Usaflex"
                                texto="Compre com o nosso link!"
                            />
                        </div>
                    </div>
                    <div className="blocoseco">

                    </div>
                        
                    <div className="blocoseco">
                        <div className="blocoseco-3">
                           
                        </div>
                        <div className="blocoseco-3">
                           
                        </div>
                        <div className="blocoseco-3">
                            
                        </div>
                    </div>
                    <div className="blocoseco">
                        <div className="blocoseco-3">
                            
                        </div>
                        <div className="blocoseco-3">
                           
                        </div>
                        <div className="blocoseco-3">
                           
                        </div>
                    </div>
                    <div className="blocoseco">
                       
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}