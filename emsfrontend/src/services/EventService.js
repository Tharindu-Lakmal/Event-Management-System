import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/events';

export const listEvents = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createEvent = (event) => {
    return axios.post(REST_API_BASE_URL, event);
}