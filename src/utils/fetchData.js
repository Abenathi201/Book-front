const BASE_URL = 'http://localhost:5000';

export const fetchData = async (url, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, options);
    const data = await response.json();
    
    return data;
};