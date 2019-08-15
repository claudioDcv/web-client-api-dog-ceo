import React from 'react';
import { concatArraysInObject } from '../../utils/utils';
import ImgCard from '../img-card/ImgCard';

/**
 * Componente para desplegar listado de imagenes de razas
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @param {Object} props.data - object, objeto donde cada key es un array con url de imagenes
 * @param {Array<string>} props.data.key - key es un array con url de imagenes
 * @returns {JSX.Element}
 */
const ImageList = ({ data }) => {
    return (
        <section className="card-columns">
            {concatArraysInObject(data).map((image, index) => (
                <ImgCard image={image} key={index} />
            ))}
        </section>
    );
};

export default ImageList;