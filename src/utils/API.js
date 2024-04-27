const URL_PREFIX="http://localhost:3000"
// const URL_PREFIX="https://uci-fish-back.onrender.com"

const API = {
    // Signup function
    signup:userObj=>{
        // Makes a post request to the backend
        return fetch(`${URL_PREFIX}/api/users`,{
            method:"POST",
            // Passes in the user oject
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    // Login function
    login:userObj=>{
        // Makes to post request to the backend
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:"POST",
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
    },
    // Check token function 
    checkToken:token=>{
        return fetch(`${URL_PREFIX}/tokendata`,{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    // GetOneUser function
    getOneUser:userId=>{
        // GET fetch request to the backend passing in userId
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())
    },
    // getReviewsByReviewee function
    getReviewsByReviewee:userId=>{
        // GET fetch request to the backend passing in userId as the revieweeId
        return fetch(`${URL_PREFIX}/api/reviews/reviewee/${userId}`).then(res=>res.json())
    },
    postImage: (formData, id)=> {
        return fetch(`${URL_PREFIX}/api/image/singlefile/${id}`, {
            method: "POST",
            body: formData           
        }).then(res=>res.json())
    },
    postMutlipleImages: (formData, id)=> {
        return fetch(`${URL_PREFIX}/api/image/multipleFiles/${id}`, {
            method: "POST",
            body: formData           
        }).then(res=>res.json())
    },
    getImages: () => {
        return fetch(`http://localhost:3000/api/image`, {
            method: "GET"
        }).then(res=>res.json())
    }
}


export default API