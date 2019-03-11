export const login = () => ({
    type: 'LOGIN'
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const selectUser = (user) => ({
    type: 'SELECT_USER',
    payload: { user }
});
