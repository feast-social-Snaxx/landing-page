import http, { API_URL, BASE_ROUTES } from "./http-common";

class snaxxApiService {
    contact(data) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        return fetch(`${API_URL}/${BASE_ROUTES.CONTACT}`, requestOptions);
    }
}

export default new snaxxApiService();
