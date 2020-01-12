import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
    const user = {
        username: 'Admin',
        password: 'test1A'
    };
    const action = login(user);
    expect(action).toEqual({
        type: 'LOGIN',
        user
    });
}); 

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});