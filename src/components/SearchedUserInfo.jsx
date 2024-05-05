import React, { useEffect, useState } from "react";
import API from "../utils/API";

// Imports api fetch functions
// import API from "../../utils/API"
function SearchedUserInfo(props) {
    const [profilePic, setProfilePic] = useState()

    useEffect(() => {
        if (!props.userId && !props.profId) {
            return
        }
        API.getSingleUserImages(props.profId).then((data) => {

            for (let i = 0; i < data.length; i++) {
                if (data[i].isProfilePic === true) {
                    console.log(data[i])
                    const url = data[i].imageUrl
                    setProfilePic(url)
                    console.log(profilePic)
                } else {

                }
            }
        })
    }, [props.userId, profilePic])

    return (
        <>
            <section className="bg-zinc-900 flex rounded-[15px] flex-col shadow-lg shadow-black/60">
                <div className="flex flex-row">

                    <div className="profilePicture w-1/3 px-[1rem]">
                        <img src={profilePic ? profilePic : '/defaultProfile.png'} height="200" width="200" alt="profile picture of user" />
                    </div>
                    <div className="flex flex-col w-2/3 pt-3">
                        <ul className="biography flex flex-col justify-start px-[1rem]">
                            <li className="py-3 font-bold">Username : <span className="text-xl">{props.username}</span></li>
                            <li className="pb-2 font-bold">About Me:</li>
                            <li>{props.biography}</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    {props.isPhotographer
                        ? <ul className="px-[1.5rem] py-[1rem]">
                            <li className="serveLocationChip pb-[1rem]" >Serves:&nbsp; {props.ServeLocations?.map((loc, i) => (
                                <span className="chip" key={i}>{loc.location}&nbsp;</span>
                            ))}
                            </li>
                            <li className="specialtyChip pb-[1rem]" >Specialties:&nbsp; {props.Specialties?.map((spec, i) => (
                                <span className="chip" key={i}>{spec.specialty}&nbsp;</span>
                            ))}
                            </li>
                            <li className="websiteAndVideo pb-[1rem]" >Website:&nbsp;<a target="_blank" href={props.website}>{props.website}</a></li>
                            {props.videography
                                ? <li className="websiteAndVideo">Videography : Yes</li>
                                : <li className="websiteAndVideo">Videography : No</li>
                            }
                        </ul>
                        : <></>
                    }
                </div>
            </section>
        </>
    );
}

export default SearchedUserInfo;