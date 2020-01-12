const contactsReducerDefautState = [];

export default (state = contactsReducerDefautState, action) => {
    switch (action.type) {
        case 'GET_CONTACTS':
            return [...state, action.contacts];
        default:
            return state;
    }
}