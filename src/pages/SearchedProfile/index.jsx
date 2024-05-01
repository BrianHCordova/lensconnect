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
import UserReviwer from "../../components/UserReviewer"
// Imports api fetch functions
import API from "../../utils/API"
import Chat from "../Chat";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');


function Profile(props) {
console.log(props.id);

    // Use state hook to store the users data
    const [userObj, setUserObj] = useState({});
    const [reviewArr, setReviewArr] = useState([]);
    const {id} = useParams();

    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        // Runs the getOneUser function from the API utils page
        API.getOneUser(id).then((userData) => { //props.userId is 0 untill we can make tokens work
            setUserObj(userData);
            console.log(userObj)
        });
        // Runs the getReviewsByReviewee function from the API utils page
        API.getReviewsByReviewee(props.userId).then((revData) => {
            setReviewArr(revData)
        });
    }, [props.userId]);    


    const createString = () => {
        const loggedInUserId = props.id;
        const reqParamsId = userObj.id;
        const result = `${loggedInUserId}${reqParamsId}`;
        return result;
      };

    const createRoom = (e) => {
        e.preventDefault();
        //create a room with the string of logged in userid and searched user id
        socket.emit('joinRoom', createString(), props.id, id);
        window.location.href = `/chat/${createString()}`;
      }
    
    // HTML
    return (
        <main className="grid">
            <div className="col-span-full">
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
            <div className="col-span-full">
                <UserReviwer reviews={userObj.Reviews} />
            </div>
            <button type="button" onClick={createRoom}>Start Chat</button>
        </main>

    );
}

// Exports the Profile page
export default Profile;