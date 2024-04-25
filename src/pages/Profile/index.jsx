// Imported react hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Stylesheet
import "./style.css"
// Imports the profile pages components
import UserInfo from "../../components/UserInfo"
import UserImages from "../../components/UserImages"
import UserReviews from "../../components/UserReviews"
// Imports api fetch functions
import API from "../../utils/API"

function Profile(props) {

    // Use state hook to store the users data
    const [userObj, setUserObj] = useState({});

    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        const userId = 2
        // Runs the getOneUser function from the API utils page
        API.getOneUser(userId).then((data) => { //props.userId is 0 untill we can make tokens work
            setUserObj(data);
            console.log(data)
        });
    }, []);
    // console.log(userObj)

    // HTML
    return (
        <main className="grid">
            <div className="col-span-full">
                {/* pass the userObj into UserInfo as props when tokens work */}
                <UserInfo
                    username={userObj.username}
                    biography={userObj.biography}
                    specialties={userObj.Specialties}
                    serveLocations={userObj.ServeLocations}
                    Reviews={userObj.reviews}
                />
            </div>
            <div className="col-span-full">
                <UserImages />
            </div>
            <div className="col-span-full">
                <UserReviews />
            </div>
        </main>

    );
}

// Exports the Profile page
export default Profile;