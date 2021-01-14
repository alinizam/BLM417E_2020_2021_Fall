const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC":
            state = {
                ...state,
                counter: state.counter + action.payload
            };
            break;    
        case "DEC":
            state = {
                ...state,
                counter: state.counter - 1
            };
            break;
    }
    return state;

}
export default reducer;