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

    const navigate = useNavigate()
    // Use state hook to store the users data
    const [userObj, setUserObj] = useState({});
    const [reviewArr, setReviewArr] = useState([]);
    const [profilePic, setProfilePic] = useState()


    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        if (!props.userId) {
            return
        }
        // Runs the getOneUser function from the API utils page
        API.getOneUser(props.userId).then((userData) => { 
            setUserObj(userData);
        });
        // Runs the getReviewsByReviewee function from the API utils page
        API.getReviewsByReviewee(props.userId).then((revData) => {
            setReviewArr(revData)
        });

        // API.getSingleUserImages(props.userId).then((data)=> {
        //     console.log(data)
        //     setImages(data)

        // })
    }, [props.userId]);

    const handleReport = () => {
        navigate("/report")
    }


    // HTML
    return (
        <div className="container mx-auto w-1/3 profile-container justify-start">
            <div className="col-span-full mt-[1rem]">
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
                    profilePic={profilePic}
                />
            </div>
            <div className="col-span-full">
                <UserImages userId={props.userId} profId={props.userId} />
            </div>
            {userObj.isPhotographer ? (
                <div className=" col-span-full">
                    <UserReviwee reviews={reviewArr} />
                </div>
            ) : (<></>)}

            <div className={!userObj.isPhotographer? "mb-5": "col-span-full" }>
                <UserReviwer reviews={userObj.Reviews} />
            </div>
            {userObj.isPhotographer ? (
                <div className="col-span-full container mx-auto transacReport bg-zinc-900 userInfoSection">
                    <h3>Transaction Report</h3>
                    <p>Transaction Reports are a confidential report a photographer can make after performing any kind of work for another person, organized though LensConnect. Theese reports are used by our customer service and admit team to review promised transactions and photography gigs that are organized on LensConnect.</p>
                    <div className="reportBtnWrap container">
                        <button className="bg-zinc-700" onClick={handleReport}>Create a Report</button>
                    </div>
                </div>
            ) : (<></>)}

            {/* <div className="chatBtn col-span-2">
                <button onClick={handleChatOpen}>Start Chat!</button>
            </div> */}
        </div >
    );
}

// Exports the Profile page
export default Profile;