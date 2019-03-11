import { userList } from '../constants';

const defaultState = {
    currentUser: null,
    userList,
    selectedUser: null
};

const appReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return Object.assign({}, state, { currentUser: {
                name: 'Mario Camacho',
                initials: 'MC'
            }});
        case 'LOGOUT':
            return Object.assign({}, state, { currentUser: null });
        case 'SELECT_USER':
            return Object.assign({}, state, { selectedUser: action.payload.user });
        default:
            return state;
    }
};

export default appReducer;
