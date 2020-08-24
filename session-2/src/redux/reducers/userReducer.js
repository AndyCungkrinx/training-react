const initalState = {
    user: null,
};

const userReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}

export default userReducer;

