import React from 'react';
import './Checkbox.css';

/**
 * Componente wrapper de label con checkbox
 * 
 * @author Claudio Rojas<claudio.dcv(a)gmail.com>
 * @since 1.0.0
 * @version 0.0.1
 * @param {Object} props - propiedades requeridas por el componentes
 * @param {string} props.value - valor que retornara en metodo onChange
 * @param {string} props.name - titulo a mostrar
 * @param {Function} props.onChange - function que retorna una funciona manejadora de evento
 * @returns {JSX.Element}
 */
const Checkbox = (props) => (
    <label className="comp-checkbox">
        <input
            type="checkbox"
            value={props.value}
            onChange={props.onChange(props.value)}
        /> {props.name}</label>
);

export default Checkbox;