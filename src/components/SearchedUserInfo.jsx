import React, { useEffect, useState } from "react";

// Imports api fetch functions
// import API from "../../utils/API"
function SearchedUserInfo(props) {
    return (
            <>
            <section className=" userInfoSection bg-zinc-900 ">
                <div className="profilePicture col-span-1  ">
                    <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="200" width="200" alt="" />
                </div>
                <div className="bio ">
                    <ul className="biography">
                        <li>Username:&nbsp;{props.username}</li>
                        <li>About Me:<br /><span>{props.biography}</span></li>
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