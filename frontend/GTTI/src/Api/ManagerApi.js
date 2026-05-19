import api from "./axios.js";

export const register = async (data) => {
    return api.post("/register", data)
}

export const login = async (data) => {
    return api.post("/login", data)
}