import "./style.css"

function UserInfo(props) {
    // HTML
    return (
        <section className="grid grid-cols-2 gap-4">
            <div className="profilePicture col-span-1 ">
                <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="250" width="250" alt="" />
            </div>
            <div className="bio col-span-1">
                <ul>
                    <li>Username: {props.username}</li>
                    <li>About Me: {props.biography}</li>
                </ul>
            </div>
            <div className="userDetails col-span-2">
                <ul>
                    <li>Serves:&nbsp; {props.serveLocations?.map((loc, i) => (
                        <span key={i}>{loc.location},&nbsp;</span>
                    ))}
                    </li>
                    {/* <li>Serves: {props.serveLocations[0].location}</li> */}
                    <li>Specialties:&nbsp; {props.specialties?.map((spec, i) => (
                        <span key={i}>{spec.specialty},&nbsp;</span>
                    ))}
                    </li>
                    <li>Website:</li>
                    <li>Price-Range:</li>
                    <li>Videography:</li>
                </ul>
            </div>
            <div className="editBtn col-span-2">
                <button>Edit</button>
            </div>
        </section>

    );
}

// Exports the UserInfo component
export default UserInfo;