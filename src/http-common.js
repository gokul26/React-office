import axios from "axios";
export default axios.create({
    baseURL: "http://connectall.in:7000/api/",
    headers: {
        "Content-type": "application/json",
    }
});