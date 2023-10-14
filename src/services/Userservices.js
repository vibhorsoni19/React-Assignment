import axios from "axios"

export const apiCall = async (method, url, data = null, headers = {}) => {
    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        });
       
        return response
    } catch (error) {
    
        // Handle the error. You might want to throw it or return a custom error message.
        return error;
    }
}