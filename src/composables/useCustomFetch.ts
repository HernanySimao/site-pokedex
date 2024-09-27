export const useCustomFetch = async <T>(endpoint: string, opts?: RequestInit): Promise<T> => {
  const baseURL = import.meta.env.VITE_API_URL;

  try {
    const response = await fetch(baseURL + endpoint, {
      ...opts
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: T = await response.json(); 
    return data;
    
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
