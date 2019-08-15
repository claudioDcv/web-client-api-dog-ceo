import React from 'react';

/**
 * Componente para visualizar un card de imagen
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @param {string} props.image - texto con URL de la imagen a mostrar
 * @returns {JSX.Element}
 */
const ImgCard = ({ image }) => (
    <article className="card">
        <img className="card-img-top" src={image} alt={image} />
    </article>
);

export default ImgCard;