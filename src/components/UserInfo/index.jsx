import "./style.css"

function UserInfo() {

    // HTML
    return (
        <section class="grid grid-cols-2 gap-4">
            <div class="profilePicture col-span-1 ">
                <img src="https://media.gq.com/photos/564276266ff00fb522b0741b/master/pass/obama-tout.jpg" height="250" width="250" alt="" />
            </div>
            <div class="bio col-span-1">
                <ul>
                    <li>Username: *Username Here*</li>
                    <li>About-me: *User Bio here*</li>
                </ul>
            </div>
            <div class="userDetails col-span-2">
                <ul>
                    <li>Servers:</li>
                    <li>Specialties:</li>
                    <li>Website:</li>
                    <li>Price-Range:</li>
                    <li>Videography:</li>
                </ul>
            </div>
            <div class = "editBtn col-span-2">
                <button>Edit</button>
            </div>
        </section>

    );
}

// Exports the UserInfo component
export default UserInfo;