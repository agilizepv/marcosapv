import './style.css'
import logo from '../../assets/logo.jpg';
import botaoMenu from "../../assets/botaoMenu.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="cabecalho">
      <div>
        <Link className="link-img" to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Link className="menu-link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="menu-link" to="/beneficios">
          Clube de Benefícios
        </Link>
      </div>
      <div>
        <Link className="menu-link" to="/ecommerce">
          Agilize E-commerce
        </Link>
      </div>
      <div>
        <Link className="menu-link" to="/parceiros">
          Parceiros Agilize
        </Link>
      </div>
      <div>
        <Link
          className="menu-link"
          to="/institucional"
        >
          Institucional
        </Link>
      </div>
      <div>
        <Link
        className="menu-link"
        to="/area-associado"
        >
        Área do Associado
        </Link>
    </div>
      <div className='menu-suspenso'>
          <img onClick={toggleDropdown} src={botaoMenu} alt="" />
      </div>
      <div>
            {isOpen && (
              <div className='bloco'>
                <div>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </div>
                <div>
                  <Link className="link" to="/beneficios">
                   Clube de Benefícios
                  </Link>
                </div>
                <div>
                  <Link
                    className="link"
                    to="/ecommerce"
                  >
                   Agilize E-commerce
                  </Link>
                </div>
                <div>
                  <Link
                    className="link"
                    to="/parceiros"
                  >
                    Parceiros Agilize
                  </Link>
                </div>
                <div>
                  <Link
                    className="link"
                    to="/institucional"
                  >
                    Institucional
                  </Link>
                </div>
                <div>
                  <Link
                  className="link"
                  to="/area-associado"
                  >
                  Área do Associado
                  </Link>
                </div>
              </div>
              )}
        </div>
    </header>
  );
  }


