import Header from "../../Components/Header/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import BeneficiosHome from "../../Components/BeneficiosHome/index.tsx";
import IconWhatsapp from "../../Components/IconWhatsapp/index.tsx";
import './style.css'


const Beneficios: React.FC = () => {
    return(
        <div>
            <Header />
            <main className="beneficios">
                <BeneficiosHome />
                <IconWhatsapp />
            </main>
            <Footer />
        </div>
    );
}; export default Beneficios;