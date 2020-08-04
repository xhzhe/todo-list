const initTodoList = []

export const todo = (state = initTodoList, action) => {
    switch (action.type) {
        case "ADD_TODO_LIST":
            return [...state, {text: action.text, done: false}]
        case "DELETE_TODO":
            return [...state].filter((item, index) => index !== action.id)
        case "DONE_TODO":
            let todo = state;
            for (let index = 0; index < todo.length; index++) {
                if (index === action.id) {
                    todo[index].done = !todo[index].done
                    break;
                }
            }
            return todo;
        default:
            return state;
    }
}