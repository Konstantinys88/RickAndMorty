import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    /**
    * Функция отправляет запрос к API 
    */
    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {

        setLoading(true);

        try {
            const response = await fetch(url, { method, body, headers });
            if (!response.ok) {
                throw new Error(`Что-то пошло не так ${url}, статус код запроса - ${response.status}`);
            }
            const data = await response.json();
            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);
    
    return { loading, request, error, clearError }
}
