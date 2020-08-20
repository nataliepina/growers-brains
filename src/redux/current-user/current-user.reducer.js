const INITIAL_STATE = {
    currentUser: null
}

const currentUserReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state    
    }
}

export default currentUserReducer;