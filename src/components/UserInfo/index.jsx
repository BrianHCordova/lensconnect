import React, { useEffect, useState } from "react";
// Imports api fetch functions
import API from "../../utils/API"

function UserInfo(props) {
    console.log(props)
    // Sets an editing usestate for when the user is editing their profile
    const [editing, setEditing] = useState(false)
    const [newUserObj, setNewUserObj] = useState({})
    const [newUserBio, setNewUserBio] = useState(props.biography)
    const [newWebsite, setNewWebsite] = useState(props.website)
    const [isPhotographer, setIsPhotographer] = useState(props.isPhotographer)
    const [videography, setVideography] = useState(props.videography)

    const refreshUserData = () => {
        API.getOneUser(props.userId).then((userData) => {
            setNewUserObj(userData);
            // setIsPhotographer(newUserObj.isPhotographer)
            // useState(newUserObj.videography)
            console.log("Refreshed Data")
        });
    }

    useEffect(() => {
        if (!props.userId) {
            return
        }
        // Runs the getOneUser function from the API utils page
        refreshUserData()
    }, [props.userId]);



    const toggleIsPhotographer = () => {
        setIsPhotographer(!isPhotographer)
    }

    const toggleVideography = () => {
        console.log(videography)
        setVideography(!videography)
        console.log(videography)
        console.log('clicked')
    }

    const toggelEditing = () => {
        setIsPhotographer(newUserObj.isPhotographer)
        setEditing(!editing);
        refreshUserData()
    };


    // Functionality that handles the addition of a specialty
    // Set the useState for the new specialty
    const [newSpec, setNewSpec] = useState("")
    // Function that collects the vale the user writes in the input
    const handleSpecInput = (event) => {
        setNewSpec(event.target.value);
    };
    // Function that runs the APi fetch request from the utils API page
    const addUserSpec = () => {
        // Create an object that includes the logged in userId and the new spec
        const passData = { specialty: newSpec, userId: props.userId }
        API.editUserSpec(passData).then((newData) => {
        });
        refreshUserData()
        refreshUserData()
    };
    // Functionality that handles the deletion of a specialty
    const delUserSpec = (e) => {
        const specId = e.target.id
        // Create an object that includes the logged in userId and the spec
        const passData = { specId: specId, userId: props.userId }
        API.deleteUserSpec(passData).then((newData) => {
        });
        refreshUserData()
        refreshUserData()
    };


    // Functionality that handles the addition of a location
    // Set the useState for the new location
    const [newLoc, setNewLoc] = useState("")
    // Function that collects the vale the user writes in the input
    const handleLocInput = (event) => {
        setNewLoc(event.target.value);
    };
    // Function that runs the APi fetch request from the utils API page
    const addUserLoc = () => {
        // Create an object that includes the logged in userId and the new location
        const passData = { location: newLoc, userId: props.userId }
        API.editUserLoc(passData).then((newData) => {
        });
        refreshUserData()
        refreshUserData()
    };
    // Functionality that handles the deletion of a specialty
    const delUserLoc = (e) => {
        const locId = e.target.id
        // Create an object that includes the logged in userId and the location
        const passData = { locId: locId, userId: props.userId }
        API.deleteUserLoc(passData).then((newData) => {
        });
        refreshUserData()
        refreshUserData()
    };


    const handleBioInput = (event) => {
        setNewUserBio(event.target.value);
    };
    // Function that runs the APi fetch request from the utils API page
    const editUser = () => {
        // Create an object that includes the logged in userId and the new spec
        const passData = {
            biography: newUserBio,
            userId: props.userId,
            isPhotographer: isPhotographer,
            website: newWebsite,
            videography: videography
        }
        console.log(passData)
        API.editUserBio(passData).then((newData) => {
        });
        refreshUserData()
        refreshUserData()
    };

    const handleWebsiteInput = (event) => {
        setNewWebsite(event.target.value)
    }

    const locInputStyle = {
        width: `${newLoc.length * 5 + 50}px`
    };
    const specInputStyle = {
        width: `${newSpec.length * 5 + 50}px`
    };

    if (!editing) { // Will render the basic photographers userInfo
        return (
            <section className="grid grid-cols-2 grid-rows-1 gap-6">
                <div className="profilePicture col-span-1 ">
                    <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="250" width="250" alt="" />
                </div>
                <div className="bio col-span-1 row-span-2">
                    <ul>
                        <li>Username:&nbsp;{newUserObj.username}</li>
                        <li>About Me:<br /><span>{newUserObj.biography}</span></li>
                    </ul>
                </div>
                <div className="userDetails col-span-1 ">
                    {newUserObj.isPhotographer
                        ? <ul>
                            <li className="serveLocationChip" >Serves:&nbsp; {newUserObj.ServeLocations?.map((loc, i) => (
                                <span className="chip" key={i}>{loc.location}&nbsp;</span>
                            ))}
                            </li>
                            <li className="specialtyChip" >Specialties:&nbsp; {newUserObj.Specialties?.map((spec, i) => (
                                <span className="chip" key={i}>{spec.specialty}&nbsp;</span>
                            ))}
                            </li>
                            <li>Website:&nbsp;<a target="_blank" href={props.website}>{newUserObj.website}</a></li>
                            {newUserObj.videography
                                ? <li>Videography: Yes</li>
                                : <li>Videography: No</li>
                            }
                        </ul>
                        : <></>
                    }
                </div>
                <div className="editBtn col-span-2">
                    <button onClick={toggelEditing} >Edit</button>
                </div>
            </section>

        );
    } else { // Will render the editable photographer userInfo
        return (
            <section className=" container mx-auto grid grid-cols-2 grid-rows-3 gap-4">
                <div className="profilePicture col-span-1 row-span-1 ">
                    <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="250" width="250" alt="" />
                </div>
                <div className="bio col-span-1 row-span-2">
                    <ul>
                        <li>Username: {newUserObj.username}</li>
                        <li>About Me: <textarea onChange={handleBioInput} className="textarea" cols="30" rows="6">{newUserObj.biography}</textarea></li>
                    </ul>
                </div>
                <div className="userDetails col-span-1 row-span-2">
                    {isPhotographer
                        ? <div><p>Are you a a Photographer looking for work?: <input onChange={toggleIsPhotographer} checked  type="checkbox" /></p></div>
                        : <div><p>Are you a a Photographer looking for work?: <input onChange={toggleIsPhotographer} type="checkbox" /></p></div>
                    }
                    {isPhotographer
                        ? <ul>
                        <div className="chipWrap"> <div className="instructions"><span className="text-green-600">+</span> to add, or <span className="text-red-600">x</span> to remove a location</div>
                            <li className="serveLocationChip" >&nbsp; {newUserObj.ServeLocations?.map((loc, i) => (
                                <span className="chip" key={i}>{loc.location}&nbsp;<button onClick={delUserLoc} id={loc.id} className="chipDelete">X</button>&nbsp;</span>
                            ))}
                                <div className="addChip">
                                    <input onChange={handleLocInput} value={newLoc} placeholder="add Location" type="text" style={locInputStyle} />&nbsp;<button onClick={addUserLoc} className="chipDelete">+</button>&nbsp;
                                </div>
                            </li>
                        </div>
                        <div className="chipWrap"> 
                        <div className="instructions"><span className="text-green-600">+</span> to add, or <span className="text-red-600">x</span> to remove a specialty</div>
                            <li className="specialtyChip" >&nbsp; {newUserObj.Specialties?.map((spec, i) => (
                                <span className="chip" key={i}>{spec.specialty}&nbsp;<button onClick={delUserSpec} id={spec.id} className="chipDelete">X</button>&nbsp;</span>
                            ))}
                                <div className="addChip">
                                    <input onChange={handleSpecInput} value={newSpec} placeholder="add specialty" type="text" style={specInputStyle} />&nbsp;<button onClick={addUserSpec} className="chipDelete">+</button>&nbsp;
                                </div>
                            </li>
                        </div>
                        
                        <li>Website: <input onChange={handleWebsiteInput} placeholder={newUserObj.website} className="editInput"></input></li>
                        {videography
                                ? <li>Videography: <input onChange={toggleVideography} checked type="checkbox" /></li>
                                : <li>Videography: <input onChange={toggleVideography} type="checkbox" /></li>
                            }
                    </ul>
                        : <></>
                    }
                </div>
                <div className="editBtn col-span-2">
                    <button onClick={() => { toggelEditing(), editUser() }}>Save</button>
                </div>
            </section>
        )
    }
}

// Exports the UserInfo component
export default UserInfo;