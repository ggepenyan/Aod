import axios from "axios";

let api = "http://5ba21dfdee710f0014dd76ef.mockapi.io/api/";

// if (window.location.origin.indexOf('localhost') === -1) {
//    api = window.location.origin;
// }

export default axios.create({
    // withCredentials: true,
    baseURL: api
});
