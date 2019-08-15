import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './ImageList';

it('renders ImageList without crashing', () => {
    const div = document.createElement('div');
    const mockData = { a: ['http://mock.cl/img.png', 'http://mock.cl/img.png'] };
    ReactDOM.render(<ImageList data={mockData} />, div);
    ReactDOM.unmountComponentAtNode(div);
});