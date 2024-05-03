const URL_PREFIX="https://lensconnect-back.onrender.com"

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

    editUserBio: userObj => {
        return fetch(`${URL_PREFIX}/api/prop/editprofile/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    postUserReview: reviewObj => {
        return fetch(`${URL_PREFIX}/api/reviews`, {
            method: "POST",
            body: JSON.stringify(reviewObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    postUserReport: reportObj => {
        return fetch(`${URL_PREFIX}/api/report`, {
            method: "POST",
            body: JSON.stringify(reportObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    passwordVerification: userObj => {
        console.log(userObj)
        return fetch(`${URL_PREFIX}/api/users/verify/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    newUserPassword: userObj => {
        return fetch(`${URL_PREFIX}/api/prop/password/${userObj.userId}`, {
            method: "PUT",
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    },

    getUserByUsername: username => {
        return fetch(`${URL_PREFIX}/api/users/byusername/${username}`).then(res => res.json())
    },

    postImage: (formData, id) => {
        return fetch(`${URL_PREFIX}/api/image/singlefile/${id}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    },
    postMutlipleImages: (formData, id) => {
        return fetch(`${URL_PREFIX}/api/image/multipleFiles/${id}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    },
    getImages: () => {
        return fetch(`${URL_PREFIX}/api/image`, {
            method: "GET"
        }).then(res => res.json())
    },
    getSingleUserImages: (id) => {
        return fetch(`${URL_PREFIX}/api/image/${id}`, {
            method: "GET"
        }).then(res => res.json())
    },
    getChat: () => {
        return fetch(`${URL_PREFIX}/api/chat`, {
            method: "GET"
        }).then(res => res.json())
    },
    getChatRooms: userId => {
        return fetch(`${URL_PREFIX}/api/chatroom/user_receiver/${userId}`, {
            method: "GET"
        }).then(res => res.json())
    },
    getMyRooms: userId => {
        return fetch(`${URL_PREFIX}/api/chatroom/user_sender/${userId}`, {
            method: "GET"
        }).then(res => res.json())
    },
    getRoomById: roomId => {
        return fetch(`${URL_PREFIX}/api/chatroom/${roomId}`, {
            method: "GET"
        }).then(res => res.json())
    },
    getPhotographers: () => {
        return fetch(`${URL_PREFIX}/api/searchusers/`).then(res=>res.json())
    },
    getFeatPro: () => {
        return fetch(`${URL_PREFIX}/api/searchusers/featured`).then(res=>res.json()) 
    },
    postProfilePic: (formData, userId) => {
        return fetch(`${URL_PREFIX}/api/image/profilepic/${userId}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
    }
}


export default API