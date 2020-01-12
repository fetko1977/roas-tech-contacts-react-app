import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from '../../components/HomePage';

let logout, wrapper;

beforeEach(() => {
    logout = jest.fn();
    const user = {
        username: 'Admin',
        password: 'test1A'
    };
    wrapper = shallow(<HomePage user={user} logout={logout} />);
});

test('should render HomePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});
