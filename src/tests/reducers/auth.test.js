import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({});
});

test('should set state when user loggedIn', () => {
    const uid = 'asfas3453453';
    
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action);

    expect(state).toEqual({ uid });
});

test('should set state when user loggedOut', () => {
    const uid = 'asfas3453453';
    
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid }, action);

    expect(state).toEqual({});
});