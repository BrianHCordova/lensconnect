// Imported react hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Stylesheet
import "./style.css"
// Imports the profile pages components
import UserInfo from "../../components/UserInfo"
import UserImages from "../../components/UserImages"
import UserReviwee from "../../components/UserReviewee"
import UserReviwer from "../../components/UserReviewer"
// Imports api fetch functions
import API from "../../utils/API"

function Profile(props) {


    // Use state hook to store the users data
    const [userObj, setUserObj] = useState({});
    const [reviewArr, setReviewArr] = useState([]);


    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        if (!props.userId) {
            return
        }
        // Runs the getOneUser function from the API utils page
        // console.log(`props`, props)
        API.getOneUser(props.userId).then((userData) => { //props.userId is 0 untill we can make tokens work
            setUserObj(userData);
        });
        // Runs the getReviewsByReviewee function from the API utils page
        API.getReviewsByReviewee(props.userId).then((revData) => {
            setReviewArr(revData)
        });
    }, [props.userId]);

    // Chat hook
    const navigate = useNavigate();
    const handleChatOpen = () => {
        navigate("/chat");
    }

    // HTML
    return (
        <div className="grid profile-container">
            <div className="col-span-full">
                {/* pass the userObj into UserInfo as props when tokens work */}
                <UserInfo
                    userId={props.userId}
                    username={userObj.username}
                    biography={userObj.biography}
                    specialties={userObj.Specialties}
                    serveLocations={userObj.ServeLocations}
                    website={userObj.website}
                    videograpgy={userObj.videography}
                    isPhotographer={userObj.isPhotographer}
                />
            </div>
            <div className="col-span-full">
                <UserImages userId={props.userId}/>
            </div>
            <div className="col-span-full">
                <UserReviwee reviews={reviewArr} />
            </div>
            <div className="col-span-full">
                <UserReviwer reviews={userObj.Reviews}/>
            </div>
            {/* conditionally renders chat button if user is logged in */}
            {props.userId && (
            <div className="chatBtn col-span-2">
                <button onClick={handleChatOpen}>Start Chat!</button>
            </div>
    )}
        </div>

    );
}

// Exports the Profile page
export default Profile;