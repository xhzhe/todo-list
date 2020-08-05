import axios from 'axios';

const baseUrl = 'https://5e9ec500fb467500166c4658.mockapi.io/todos'

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