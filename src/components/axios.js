import axios from "axios";

const instance = axios.create({
    //this contains the link to your api
    baseURL: "" // the cloud function api url
})

export default instance;