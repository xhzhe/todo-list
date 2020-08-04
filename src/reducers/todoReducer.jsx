const initTodoList = []

export const todo = (state = initTodoList, action) => {
    switch (action.type) {
        case "ADD_TODO_LIST":
            return [...state, {text: action.text, done: false}]
        case "DELETE_TODO":
            return [...state].filter((item, index) => index !== action.id)
        case "DONE_TODO":
            let stateCopy = [...state]
            stateCopy.map((item, index) => {
                if (index === action.id) {
                    return item.done = !item.done
                }
                return item.done
            })
            return [...stateCopy]
        default:
            return state;
    }
}