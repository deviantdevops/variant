const initialState = {

    'sidebar_app_open': false,  

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SIDEBAR_APP_OPEN':
            return {
                ...state,
                sidebar_app_open: action.payload,
            };
        default:
            return state
    }
}

export default reducer;
