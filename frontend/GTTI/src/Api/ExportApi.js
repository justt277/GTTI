import api from "./axios.js"

export const createExport = async (data) => {
    return api.post('/Export/Add', data)
};

export const getExports = async () => {
    return api.get('/Export/Get')
}

export const updateExport = async (_id, data) => {
    return api.patch(`/Export/Patch/${_id}`, data)
}

export const deleteExport = async (_id) => {
    return api.delete(`/Export/Delete/${_id}`)
}