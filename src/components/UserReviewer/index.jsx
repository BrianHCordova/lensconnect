function UserReviewer(props) {
    // HTML
    return (

        <section className="userInfoSection" >
            <div className="columns-1 reviews">
                <h2>Reviews I've Written</h2>
                {props.reviews?.map((rev, i, j) =>
                    <div className="reviewContainer">
                        <p key={i}>{rev.review}</p>
                        <h6 key={j}>Review for: {rev.reviewee.username}</h6>
                    </div>
                )}
            </div>
        </section>

    );
}

// Exports the UserReviewer component
export default UserReviewer;