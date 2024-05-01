// Imported react hooks
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
// Stylesheet
import "./style.css"
// Imports the profile pages components
import SearchedUserInfo from "../../components/SearchedUserInfo"
// import UserImages from "../../components/UserImages"
// import UserReviwee from "../../components/UserReviewee"
import UserReviwee from "../../components/UserReviewee"
// Imports api fetch functions
import API from "../../utils/API"

function SearchedProfile(props) {


    // Use state hook to store the users data
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({});
    const [reviewArr, setReviewArr] = useState([]);
    const { id } = useParams()

    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        // Runs the getOneUser function from the API utils page
        API.getOneUser(id).then((userData) => { //props.userId is 0 untill we can make tokens work
            setUserObj(userData);
            console.log(userObj)
        });
        // Runs the getReviewsByReviewee function from the API utils page
        API.getReviewsByReviewee(id).then((revData) => {
            setReviewArr(revData)
        });
    }, [props.userId]);

    const handleReview = () => {
        navigate(`/review/${userObj.id}`)
    }


    // HTML
    return (
        <div className="container mx-auto w-1/3 grid profile-container ">
            <div className="">
                {/* pass the userObj into UserInfo as props when tokens work */}
                <SearchedUserInfo
                    userId={props.userId}
                    username={userObj.username}
                    biography={userObj.biography}
                    Specialties={userObj.Specialties}
                    ServeLocations={userObj.ServeLocations}
                    website={userObj.website}
                    videograpgy={userObj.videography}
                    isPhotographer={userObj.isPhotographer}
                />
            </div>
            <div className="">
                <UserReviwee reviews={reviewArr} />
                <div className="reviewUserBtn ">
                    <button onClick={handleReview} className="reviewUserBtn bg-zinc-800">Review {userObj.username}</button>
                </div>
            </div>
        </div>

    );
}

// Exports the Profile page
export default SearchedProfile;