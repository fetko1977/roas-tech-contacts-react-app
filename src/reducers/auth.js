export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
               user: action.user
            };
        case 'LOGOUT':
            localStorage.removeItem('user');
            return {};
        default:
            return state;
    }
}