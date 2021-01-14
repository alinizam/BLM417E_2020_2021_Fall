const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                counter: state.counter + 1
            };
            break;    
        case "SUBSTRACT":
            state = {
                ...state,
                counter: state.counter - 1
            };
            break;
    }
    return state;

}
export default reducer;