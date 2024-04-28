const URL_PREFIX = "http://localhost:3000"
// const URL_PREFIX="https://uci-fish-back.onrender.com"

const API = {
    // Signup function
    signup: userObj => {
        // Makes a post request to the backend
        return fetch(`${URL_PREFIX}/api/users`, {
            method: "POST",
            // Passes in the user oject
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    // Login function
    login: userObj => {
        // Makes to post request to the backend
        return fetch(`${URL_PREFIX}/api/users/login`, {
            method: "POST",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    // Check token function 
    checkToken: token => {
        return fetch(`${URL_PREFIX}/tokendata`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => res.json())
    },

    // GetOneUser function
    getOneUser: userId => {
        // GET fetch request to the backend passing in userId
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res => res.json())
    },

    // getReviewsByReviewee function
    getReviewsByReviewee: userId => {
        // GET fetch request to the backend passing in userId as the revieweeId
        return fetch(`${URL_PREFIX}/api/reviews/reviewee/${userId}`).then(res => res.json())
    },

    // PUT request to the backend to add a users specialty
    editUserSpec: editObj => {
        console.log(editObj)
        return fetch(`${URL_PREFIX}/api/prop/editspec/${editObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(editObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    // PUT request to the backend to add a users serveLocation
    editUserLoc: editObj => {
        console.log(editObj)
        return fetch(`${URL_PREFIX}/api/prop/editloc/${editObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(editObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    deleteUserSpec: delObj => {
        console.log(delObj)
        return fetch(`${URL_PREFIX}/api/prop/deletespec/${delObj.userId}/${delObj.specId}`, {
            method: "DELETE",
        }).then(res => res.json())
    },

    deleteUserLoc: delObj => {
        console.log(delObj)
        return fetch(`${URL_PREFIX}/api/prop/deleteloc/${delObj.userId}/${delObj.locId}`, {
            method: "DELETE",
        }).then(res => res.json())
    },

    editUserBio:userObj => {
        return fetch(`${URL_PREFIX}/api/prop/editprofile/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    postImage: (formData) => {
        return fetch(`${URL_PREFIX}/api/image`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    }
}


export default API