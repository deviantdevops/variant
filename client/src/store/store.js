import {combineReducers} from "redux";
import root from "./reducers/root";
import wallet from './reducers/wallet';
import blocks from './reducers/blocks';
/**
 * TRANSLATIONS FILES
 */
import translationsIndex from './reducers/translations/translationsReducer';
import translations from './reducers/translations';


const storeReducer = combineReducers({
    root,
    wallet,
    blocks,
    translationsIndex,
    translations,
    
})


export default storeReducer;
