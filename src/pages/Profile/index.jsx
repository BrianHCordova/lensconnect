// Imports hooks for use 
import React, { useEffect, useState } from "react";

// Import the profile pages components
import UserInfo from "../../components/UserInfo"
import UserImages from "../../components/UserImages"
import UserReviews from "../../components/UserReviews"

// Imports api fetch functions
import API from "../../utils/API"

import "./style.css"

function Profile(props) {

    // Use state hook to store the users data
    const [userObj, setUserObj] = useState({});

    // API useEffect to gather users infor on page load
// useEffect(() => {
//     API.getOneUser(props.userId).then((data) => {
//         setUserObj(data);
//       });
//   }, [])

    // HTML
    return (
        <body class="grid">
            <div class="col-span-full">
                <UserInfo />
            </div>
            <div class="col-span-full">
                <UserImages />
            </div>
            <div class="col-span-full">
                <UserReviews />
            </div>
        </body>

    );
}

// Exports the Profile page
export default Profile;