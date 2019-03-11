const userList = [{
    id: 100,
    firstName: 'Edward', 
    lastName: 'Norton', 
    email: 'edwardnorton@mail.com', 
    phone: '3214567896'
}, {
    id: 101,
    firstName: 'Keira', 
    lastName: 'Knightley', 
    email: 'keiraknightley@mail.com', 
    phone: '9873245786'
}, {
    id: 102,
    firstName: 'Natalie', 
    lastName: 'Portman', 
    email: 'natalieportman@mail.com', 
    phone: '915974545786'
}, {
    id: 103,
    firstName: 'Jude', 
    lastName: 'Law',
    email: 'judelaw@mail.com', 
    phone: '987654321486'
}, {
    id: 104,
    firstName: 'Jennifer ', 
    lastName: 'Lawrence',
    email: 'jenniferlawrence@mail.com', 
    phone: '951753654'
}, {
    id: 105,
    firstName: 'Emily', 
    lastName: 'Ratajkowski',
    email: 'emilyratajkowski@mail.com', 
    phone: '753951258'
}, {
    id: 106,
    firstName: 'Amanda',
    lastName: 'Seyfried',
    email: 'amandaseyfried@mail.com', 
    phone: '75369844225'
}, {
    id: 107,
    firstName: 'Mila', 
    lastName: 'Kunis',
    email: 'milakunis@mail.com', 
    phone: '1439785246'
}, {
    id: 108,
    firstName: 'Angelina', 
    lastName: 'Jolie',
    email: 'angelinajolie@mail.com', 
    phone: '154789652456'
}, {
    id: 109,
    firstName: 'Anne', 
    lastName: 'Hathaway',
    email: 'annehathaway@mail.com', 
    phone: '856954752'
}, {
    id: 110,
    firstName: 'Sandra', 
    lastName: 'Bullock',
    email: 'sandrabullock@mail.com', 
    phone: '3216547885'
}, {
    id: 111,
    firstName: 'Megan', 
    lastName: 'Fox',
    email: 'meganfox@mail.com', 
    phone: '6210045783'
}, {
    id: 112,
    firstName: 'Scarlett', 
    lastName: 'Johansson',
    email: 'scarlettjohansson@mail.com', 
    phone: '7587458744'
}, {
    id: 113,
    firstName: 'Emma', 
    lastName: 'Stone',
    email: 'emmastone@mail.com', 
    phone: '458874566325'
}, {
    id: 114,
    firstName: 'Jennifer', 
    lastName: 'Aniston',
    email: 'jenniferaniston@mail.com', 
    phone: '84620157365'
}, {
    id: 115,
    firstName: 'Nicole', 
    lastName: 'Kidman',
    email: 'nicolekidman@mail.com', 
    phone: '654987444851'
}, {
    id: 116,
    firstName: 'Jessica', 
    lastName: 'Alba',
    email: 'jessicaalba@mail.com', 
    phone: '98765411452'
}, {
    id: 117,
    firstName: 'Jennifer', 
    lastName: 'Garner',
    email: 'jennifergarner@mail.com', 
    phone: '654788441252'
}, {
    id: 118,
    firstName: 'Emma ', 
    lastName: 'Watson',
    email: 'emmawatson@mail.com', 
    phone: '2245878896'
}, {
    id: 119,
    firstName: 'Victoria', 
    lastName: 'Beckham',
    email: 'victoriabeckham@mail.com', 
    phone: '9514785263'
}];

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
