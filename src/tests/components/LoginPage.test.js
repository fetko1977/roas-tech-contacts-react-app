import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let login, wrapper;

beforeEach(() => {
    login = jest.fn();
    wrapper = shallow(<LoginPage login={login}/>);
});

test('should render LoginPage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});