import axios from "axios";

const verifyAuth = () =>{
    var key = localStorage.getItem('api-auth-token')
    if (key !== null){
        return true
    }
    return false
}

const loginUser = async(email='', password='') => {

    return axios.post('https://localhost:7129/api/auth/login', {email: email, password: password})
    .then(response => {
        if (response.status >= 299){
            throw Error("failed, account probably does not exist");
        }
        return response.data
    })
    .then(response => {
        console.log(response)
        localStorage.setItem('api-auth-token', response);
        return true;
    })
    .catch(err => {
        console.log(err)
        throw Error(err);
    });
}

const registerUser = (email='', password='') => {
    return axios.post('https://localhost:7129/api/auth/login', {email: email, password: password})
    .then(response => {
        if (response.status >= 299) throw Error("failed");
        return response.data;
    })
    .then(response => true)
    .catch(err => {
        throw Error(err)
    });
}

export default {loginUser, registerUser, verifyAuth}