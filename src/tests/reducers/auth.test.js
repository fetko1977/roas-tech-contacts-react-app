import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({});
});

test('should set state when user loggedIn', () => {
    const user = {
        username: 'Admin',
        password: 'test1A'
    };
    
    const action = {
        type: 'LOGIN',
        user
    }
    const state = authReducer({}, action);

    expect(state).toEqual({ user });
});

test('should set state when user loggedOut', () => {
    const user = {
        username: 'Admin',
        password: 'test1A'
    };
    
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ user }, action);

    expect(state).toEqual({});
});