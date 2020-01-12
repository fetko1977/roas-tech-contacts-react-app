import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

let logout, wrapper;

beforeEach(() => {
    logout = jest.fn();
    wrapper = shallow(<Header logout={logout}/>);
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout correctly', () => {
    wrapper.find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
});