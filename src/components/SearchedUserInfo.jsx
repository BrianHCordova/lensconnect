import React, { useEffect, useState } from "react";

// Imports api fetch functions
// import API from "../../utils/API"
function SearchedUserInfo(props) {
    console.log(props.username)
    console.log(props.ServeLocations)
    return (
        <div className="container mx-auto">

        <div className="grid grid-cols-2 grid-rows-1 gap-6">
            <div className="profilePicture col-span-1 ">
                <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="250" width="250" alt="" />
            </div>
            <div className="bio col-span-1 row-span-2">
                <ul>
                    <li>Username:&nbsp;{props.username}</li>
                    <li>About Me:<br /><span>{props.biography}</span></li>
                </ul>
            </div>
            <div className="userDetails col-span-1 ">
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
                        <li>Website:&nbsp;<a target="_blank" href={props.website}>{props.website}</a></li>
                        {props.videography
                            ? <li>Videography: Yes</li>
                            : <li>Videography: No</li>
                        }
                    </ul>
                    : <></>
                }
            </div>
        </div>
        </div>

    );
}

export default SearchedUserInfo;