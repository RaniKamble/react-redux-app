import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, itemsUserID, getEmployeeIDArray, clearData} from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    itemsUserID,
    getEmployeeIDArray,
    clearData
});