export const todo = (state = [], action) => {
    switch (action.type){
        case "ADD_TODO_LIST":
            return [...state,action.text]
        default:
            return state;
    }
}