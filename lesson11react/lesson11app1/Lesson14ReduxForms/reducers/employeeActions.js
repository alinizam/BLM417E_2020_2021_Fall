import { Types } from './operationTypes'

export  const  fetchEmployees =  (personelId) => {
    return async (dispatch) => {fetch("https://localhost:44344/api/Employees")
        .then(response => response.json())
        .then(data => {
            console.log("fe called2 " + personelId + "   " + data);
            const emp = data.find(e => e.personelId == personelId);
            console.log(emp);
            return dispatch(fetchEmployeeSuccess(emp));
        })
        .catch(error => {
            // error.message is the error message
            return dispatch(fetchEmployeeFailure(error.message));
        });
    }
    
};

export const fetchEmployeesRequest = () => {
    return {
        type: Types.SELECT_RECORDS
    }
}

export const fetchEmployeeSuccess = (emp) => {
    console.log("fetchemp"+emp);
    return {
        type: Types.SELECT_RECORD,
        payload: emp
    }
}
export const fetchEmployeeFailure = (error) => {
    return {
        type: Types.SELECT_FAILURE,
        payload: error
    }
}

// set delected department and loged in user info

export const updateSelectedEmployees = (payload) => {
    return {
        type: Types.UPDATE_SELECTED_DEPARTMENT,
        payload: payload
    }

}
export const storeData = (payload) => {

    return {
        type: Types.STORE_DATA,
        payload: payload
    }

}





