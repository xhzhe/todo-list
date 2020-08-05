export const addTodo = (data) => ({
    type: "ADD_TODO",
    data: data
})
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id: id
})
export const doneTodo = (id) => ({
    type: "DONE_TODO",
    id: id
})
export const initData = (data) => ({
    type: "INIT_DATA",
    data: data
})
