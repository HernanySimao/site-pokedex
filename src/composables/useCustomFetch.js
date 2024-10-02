export const useCustomFetch = async (endpoint, opts) => {
    const baseURL = import.meta.env.VITE_API_URL;
    try {
        const response = await fetch(baseURL + endpoint, {
            ...opts
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};
