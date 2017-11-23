import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
//import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
});

// it('contains title wallet', () => {
//     const wrapper = shallow(<NavBar />);
//     const welcome = <h2>Wallet</h2>;
//     console.log(wrapper.html());
//     // expect(wrapper.contains(welcome)).to.equal(true);
//     expect(wrapper.contains(welcome)).toEqual(true);
// });
