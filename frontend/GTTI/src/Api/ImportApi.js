import api from "./axios.js"

export const createImport = async (data) => {
    return api.post('/Import/Add', data)
};

export const gotImports = async () => {
    return api.get('/Import/Get')
}

export const updateImport = async (_id, data) => {
    return api.patch(`/Import/Patch/${_id}`, data)
}

export const deleteImport = async (_id) => {
    return api.delete(`/Import/Delete/${_id}`)
}