import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
});

it('contains title wallet', () => {
    const wrapper = mount(<NavBar />);
    const welcome = <span>Wallet</span>;

    expect(wrapper.find('h2')).toContainReact(welcome);
});

