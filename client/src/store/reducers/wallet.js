const initialState = {

    publicKey: '2e8b85a45b4ba30b110463fcc125677fea79a0da619bcc30da372935f5b1d717',
    privateKey: 'af76fba4c4fb522d5e0f2ad34473271921ebe22bbf043355d09d981c39c293ec',
    balance: 0.000000,
    shareCode: ''

}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_WALLET_ADDRESS':
            return {
                ...state,
                address: action.payload,
            };
        case 'SET_WALLET_BALANCE':
            return {
                ...state,
                balance: action.payload,
            };
        default:
            return state
    }
}

export default reducer;
