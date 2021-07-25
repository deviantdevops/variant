const initialState = {
    'locale' : 'en',
    'lang': 'english',
    'countryCode':'US',
    'countries': [],
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            };
        case 'SET_LOCALE':
            return {
                ...state,
                locale: action.payload,
            };
        case 'SET_COUNTRYCODE':
            return {
                ...state,
                countryCode: action.payload,
            };
        default:
            return state
    }
}

export default reducer;
