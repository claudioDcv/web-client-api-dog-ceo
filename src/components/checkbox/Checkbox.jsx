import React from 'react';
import './Checkbox.css';

const Checkbox = (props) => (
    <label className="comp-checkbox">
        <input
            type="checkbox"
            value={props.value}
            onChange={props.onChange(props.value)}
        /> {props.name}</label>
);

export default Checkbox;