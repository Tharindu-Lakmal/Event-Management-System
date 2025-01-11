import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/events';

export const listEvents = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createEvent = (event) => {
    return axios.post(REST_API_BASE_URL, event);
}

export const getEvent = (eventId) => {
    return axios.get(REST_API_BASE_URL + '/' + eventId);
}

export const updateEvent = (eventId, event) => {
    return axios.put(REST_API_BASE_URL + '/' + eventId, event);
}

export const deleteEvent = (eventId) => {
    return axios.delete(REST_API_BASE_URL + '/' + eventId);
}