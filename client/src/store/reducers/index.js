import {combineReducers} from "redux";

import root from "./root";
import order from './order';
import product from './product';
import productsList from './productList';
import user from './user';
import locale from "./locale";
import cart from "./cart";

/**
 * TRANSLATIONS FILES
 */
import translationsIndex from './translations/translationsReducer';
import translations from './translations';


const rootReducer = combineReducers({
    root,
    order,
    product,
    productsList,
    translationsIndex,
    translations,
    user,
    locale,
    cart
})


export default rootReducer;

