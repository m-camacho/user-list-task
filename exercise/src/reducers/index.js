const defaultState = {
    currentUser: null
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
        default:
            return state;
    }
};

export default appReducer;
