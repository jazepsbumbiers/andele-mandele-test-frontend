import axios from 'axios';

export async function useRequest(url, options = {}) {
    let response = {};
    let errorMessage  = '';

    try {
        response = await axios.get(url, options);
    } catch (error) {
        if (error.response) {
            const message = error.response.data.message;
            errorMessage = message;
        }
    }

    return {
        response,
        error: errorMessage,
    };
}
