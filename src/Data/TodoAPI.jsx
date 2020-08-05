import axios from 'axios';

const baseUrl = 'http://localhost:8080/todos'

export function getTodoList() {
    return axios({
        method: 'get',
        url: baseUrl
    })
}

export function deleteTodo(id) {
    return axios({
        method: 'delete',
        url: `${baseUrl}/${id}`
    })
}

export function addTodo(todo) {
    return axios({
        method: 'post',
        url: baseUrl,
        data: todo
    })
}

export function modifyTodo(id, todo) {
    return axios({
        method: 'put',
        url: `${baseUrl}/${id}`,
        data: todo
    })
}