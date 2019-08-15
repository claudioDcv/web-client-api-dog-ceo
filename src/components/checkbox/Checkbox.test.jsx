import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox';

it('renders ImgCard without crashing', () => {
    const div = document.createElement('div');
    const mockData = {
        value: '',
        name: 'Test Name',
        onChange: () => () => () => ({}),
    };
    ReactDOM.render(<Checkbox {...mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});