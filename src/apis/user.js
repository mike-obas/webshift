import axios from "./axiosConfig"

const getUsers = async (page=0, limit=20) => {
    try{
    const serverResponse = await axios.get(`/user?page=${page}&limit=${limit}`) 
    return {
        status: serverResponse.request.status,
        response: serverResponse.data
    }
    } catch(e) {
        return {
        status: "error",
        error: e.message
    }
    }
    
}

export const userApi = { getUsers };