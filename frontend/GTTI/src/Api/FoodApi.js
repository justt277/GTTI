import api from "./axios.js"

export const createFood = async (data) => {
    return api.post('/Food/Add', data)
};

export const gotFoods = async () => {
    return api.get('/Food/Get')
}

export const updateFood = async (_id, data) => {
    return api.patch(`/Food/Patch/${_id}`, data)
}

export const deleteFood = async (_id) => {
    return api.delete(`/Food/Delete/${_id}`)
}