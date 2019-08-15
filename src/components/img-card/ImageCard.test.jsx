import React from 'react';
import ReactDOM from 'react-dom';
import ImgCard from './ImgCard';

it('renders ImgCard without crashing', () => {
    const div = document.createElement('div');
    const mockData = 'http://mock.cl/img.png';
    ReactDOM.render(<ImgCard image={mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});