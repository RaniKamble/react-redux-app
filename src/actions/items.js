export function itemsUserID(number) {
    return {
        type: 'ITEMS_USERID',
        userID: number  
    };
}

export function getEmployeeIDArray(Object) {
    return {
        type: 'EMPLOYEE_ID_LIST',
        employeeID: Object
    };
}

export function clearData(bool) {
    return {
        type: 'CLEAR_SELECTION',
        hasCleared: bool
    };
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
                dispatch(itemsHasErrored(false));
                dispatch(itemsFetchDataSuccess(items.data));

            })
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function getItemsUserID(e) {
    return (dispatch) => {
        dispatch(clearData(false));
        dispatch(itemsUserID(parseInt(e.key)));
        
    }
}
export function clearDropdownSelection() {
    return (dispatch) => {
        dispatch(clearData(true));
        dispatch(itemsUserID(0));
    }
}

export function getEmployeeIDList(e) {
    return (dispatch) => {
        let employeeIdList = [], obj = [];
        dispatch(clearData(false));
        if(e.key === "hr") {            
            employeeIdList = [
                { key: '1', text: '1' },
                { key: '2', text: '2' },
                { key: '3', text: '3' },
                { key: '4', text: '4' },
                { key: '5', text: '5' },
            ];
            
        } else {
            employeeIdList = [
                { key: '6', text: '6' },
                { key: '7', text: '7' },
                { key: '8', text: '8' },
                { key: '9', text: '9' },
            ];
        }

        obj = {employeeIdList, dept : { key: e.key, text: e.key }}
        dispatch(getEmployeeIDArray(obj ));
        
    }
}

