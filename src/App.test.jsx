import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('test app', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('test app methods', () => {
        const event = { target: { checked: true } };
        const eventCheckedFalse = { target: { checked: false } };
        const wrapper = shallow(<App />);
        const instance = wrapper.instance();
        // expect(wrapper.state('counter')).toBe(0);
        instance.makeQuery('a');
        instance.updateSelecedBreed(() => (event) => () => ({}));
        instance.handleSelectedBreed(event, 'a');
        instance.handleSelectedBreed(eventCheckedFalse, 'a');
    });
    it('test app with state', () => {
        const wrapper = mount(<App />);
        const breedList = [
            {
                "name": "terrier",
                "value": [
                    "american",
                    "australian"
                ]
            },
            {
                "name": "vizsla",
                "value": []
            }
        ]
        const objResponse = {
            "affenpinscher": [
                "https://images.dog.ceo/breeds/affenpinscher/n02110627_10147.jpg",
                "https://images.dog.ceo/breeds/affenpinscher/n02110627_10185.jpg",
                "https://images.dog.ceo/breeds/affenpinscher/n02110627_10225.jpg",
                "https://images.dog.ceo/breeds/affenpinscher/n02110627_10437.jpg",
                "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg"
            ]
        }
        //expect(wrapper.find('.foo')).to.have.lengthOf(1);
        //expect(wrapper.find('.bar')).to.have.lengthOf(0);
        wrapper.setState({ breedList, objResponse });
        //expect(wrapper.find('.foo')).to.have.lengthOf(0);
        //expect(wrapper.find('.bar')).to.have.lengthOf(1);
        wrapper.find('button.comp-responsive-filter-button').simulate('click');
    });
})