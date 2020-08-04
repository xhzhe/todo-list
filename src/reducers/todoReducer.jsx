const initTodoList = []

export const todo = (state = initTodoList, action) => {
    switch (action.type) {
        case "ADD_TODO_LIST":
            return [...state, {text: action.data.content, done: action.data.status, id: action.data.id}]
        case "INIT_DATA":
            let data = []
            action.data.forEach(item => {
                data.push({id: item.id, text: item.content, done: item.status})
            })
            return data
        case "DELETE_TODO":
            //todo delete
            return [...state].filter(item => item.id !== action.id)
        case "DONE_TODO":
            let stateCopy = [...state]
            stateCopy.map(item => {
                if (item.id === action.id) {
                    //todo update
                    return item.done = !item.done
                }
                return item.done
            })
            return [...stateCopy]
        default:
            return state;
    }
}