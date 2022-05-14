



var initialState = {
    userName: '',
    userEmail:'',
};

export default function reducer1(state = initialState, action) {
    switch (action.type) {
        case 'UpdateUser':
            return Object.assign({}, state, { userName: action.payload.userName });
            case 'UpdateEmail':
                return Object.assign({}, state, { userEmail: action.payload.userEmail });
        default:
            return state;
    }
}