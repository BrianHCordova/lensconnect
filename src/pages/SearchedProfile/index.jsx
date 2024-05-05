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
import Chat from "../Chat";
import io from 'socket.io-client';
import UserImages from "../../components/UserImages";

const socket = io('https://lensconnect-back.onrender.com/');


function SearchedProfile(props) {
    console.log(props)
    // Use state hook to store the users data
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({});
    const [reviewArr, setReviewArr] = useState([]);
    const { id } = useParams();

    // API useEffect to gather users info from the API on page load
    useEffect(() => {
        async function fetchData() {
            const userData = await API.getOneUser(id)
            const revData = await API.getReviewsByReviewee(id)
            setUserObj(userData);
            setReviewArr(revData)
        }

        fetchData()

    }, [props.userId]);

    const handleReview = () => {
        navigate(`/review/${userObj.id}`)
    }



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
        window.location.href = `/chat`;
    }

    // HTML
    return (
        <>
            <div className="container mx-auto w-1/3 profile-container justify-start">
                <div className="mt-[1rem]">
                    {/* pass the userObj into UserInfo as props when tokens work */}
                    <SearchedUserInfo
                        userId={props.userId}
                        profId={id}
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
                    <UserImages userId={props.userId} profId={parseInt(id)} />
                </div>
                <div className="">
                    <UserReviwee reviews={reviewArr} />
                    <div className="reviewUserBtn ">
                        {userObj.id == props.userId
                            ? <></>
                            : <button onClick={handleReview} className="reviewUserBtn bg-zinc-800">Review {userObj.username}</button>
                        }
                    </div>
                </div>
            </div>
            {props.userId ? (
                <div className="flex flex-row justify-center h-[4rem]">
                    <button onClick={createRoom} className="bg-zinc-800 rounded-lg p-2 mb-3 px-3 hover:border-2 border-[rgb(201,201,201)] h-[2.7rem]">Start Chat</button>
                </div>
                )
                : 
                (
                <div className="flex flex-row justify-center h-[4rem]">
                    <button onClick={()=> (navigate('/login'))} className="bg-zinc-800 rounded-lg p-2 mb-3 px-3 hover:border-2 border-[rgb(201,201,201)] h-[2.7rem]">Login to Start Chat</button>
                </div>
                )
            }

        </>
    );
}

// Exports the Profile page
export default SearchedProfile;