import { Types } from './operationTypes'

const initialState = {
    loading: false,
    employee: {},
    error: ""
};

const employeeReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case Types.UPDATE_RECORD:
            return {
                ...state,
                employee: action.payload
            };
        case Types.STORE_DATA:
            return {
                ...state,
                [action.payload.employee]: action.payload.data,
            };
        case Types.FETCH_DEPARTMENT_REQUEST:
            return {
                ...state,
                loading: true
            };
        case Types.SELECT_RECORD:
            return {
                loading: false,
                employee: action.payload,
                error: ""
            };
        case Types.SELECT_SUCCESS:
            return {
                loading: false,
                employee: action.payload,
                error: ""
            };
        case Types.SELECT_FAILURE:
            return {
                loading: false,
                employee: {},
                error: action.payload
            };

        default:
            return state;
    }
};

export default employeeReducer;
