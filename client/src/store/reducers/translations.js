const initialState = {
    'translations':{}
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_TRANSLATIONS':
            return {
                ...state,
                translations: action.payload,
            };
        default:
            return state
    }
}

export default reducer;
