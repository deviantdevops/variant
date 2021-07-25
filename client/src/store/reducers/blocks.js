const initialState = {

    'chain': []

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_CHAIN':
            return {
                ...state,
                chain: action.payload,
            };
        
        default:
            return state
    }
}

export default reducer;
