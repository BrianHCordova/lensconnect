import React, { useEffect, useState } from "react";

// Imports api fetch functions
// import API from "../../utils/API"
function SearchedUserInfo(props) {
    return (
            <>
            <section className="bg-zinc-900 flex rounded-[15px] ">
                <div className="profilePicture w-1/3 ">
                    <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="200" width="200" alt="" />
                </div>
                <div className="flex flex-col pt-3">
                    <ul className="biography flex flex-col justify-start">
                        <li className="pb-3">Username:&nbsp;{props.username}</li>
                        <li>About Me:</li>
                        {/* <li>{props.biography}</li> */}
                    </ul>
                </div>
                <div className="userDetails">
                    {props.isPhotographer
                        ? <ul>
                            <li className="serveLocationChip" >Serves:&nbsp; {props.ServeLocations?.map((loc, i) => (
                                <span className="chip" key={i}>{loc.location}&nbsp;</span>
                            ))}
                            </li>
                            <li className="specialtyChip" >Specialties:&nbsp; {props.Specialties?.map((spec, i) => (
                                <span className="chip" key={i}>{spec.specialty}&nbsp;</span>
                            ))}
                            </li>
                            <li className="websiteAndVideo" >Website:&nbsp;<a target="_blank" href={props.website}>{props.website}</a></li>
                            {props.videography
                                ? <li className="websiteAndVideo">Videography: Yes</li>
                                : <li className="websiteAndVideo">Videography: No</li>
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