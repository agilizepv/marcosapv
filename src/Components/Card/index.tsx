import React from 'react';
import './style.css'

interface CardsBeneficiosProps {
  imagem: string;
  titulo: string;
  texto: string;
}

const CardsBeneficios: React.FC<CardsBeneficiosProps> = ({ imagem, titulo, texto }) => {
  return (
    <div className="beneficios-card">
      <img src={imagem} alt="" />
      <div className="beneficios-card-texto">
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default CardsBeneficios;