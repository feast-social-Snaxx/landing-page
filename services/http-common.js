import axios from "axios";

export const API_URL = "https://api.snaxx.xyz/api";
//export const API_URL = "http://localhost:3001/api/";

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    },
});

export const BASE_ROUTES = {
    CONTACT: "contact",
};
