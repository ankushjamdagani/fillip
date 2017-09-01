const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            if(action.payload.username === 'ankush' && action.payload.password === 'ankush')
            // dispatch(loggedIn())
            return {
                ...state,
                loggedIn: true
            }
            break;
        default:
            return {
                ...state
            }
    }
}

export default authReducer;
