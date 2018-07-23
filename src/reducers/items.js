
export function itemsUserID(state = 0, action) {
    switch (action.type) {
        case 'ITEMS_USERID':
            return action.userID;
  
        default:
            return state;
    }
}

export function clearData(state = false, action) {
    switch (action.type) {
        case 'CLEAR_SELECTION':
            return action.hasCleared;
  
        default:
            return state;
    }
}

export function getEmployeeIDArray(state = [
        { key: '1', text: '1' },
        { key: '2', text: '2' },
        { key: '3', text: '3' },
        { key: '4', text: '4' },
        { key: '5', text: '5' },
    ], action) {
        switch (action.type) {
            case 'EMPLOYEE_ID_LIST':
                return action.employeeID;
    
            default:
                return state;
        }
}


export function itemsHasErrored(state = false, action) {
  switch (action.type) {
      case 'ITEMS_HAS_ERRORED':
          return action.hasErrored;

      default:
          return state;
  }
}

export function itemsIsLoading(state = false, action) {
  switch (action.type) {
      case 'ITEMS_IS_LOADING':
          return action.isLoading;

      default:
          return state;
  }
}

export function items(state = [], action) {
  switch (action.type) {
      case 'ITEMS_FETCH_DATA_SUCCESS':
          return action.items;
      default:
          return state;
  }
}

