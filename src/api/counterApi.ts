import axios from "axios";

type responseType = {
    value: number
}
const instance = axios.create({
    baseURL: 'http://localhost:3004'
})

export const counterApi = {
    getCounterValue() {
        return instance.get<responseType>('/counter').then((res) => res.data.value)
    },
    incCounterValue(value: number) {
        return instance.post<responseType>('/counter', {value}).then((res) => res.data.value)
    }
}