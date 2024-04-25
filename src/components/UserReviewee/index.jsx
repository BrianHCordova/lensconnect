function UserReviewee(props) {
    // HTML
    return (

        <section >
            <div className="columns-1 reviews">
                <h2>Reviews About Me</h2>
                {/* {props.reviews?.map((rev, i, j) =>
                    <div className="reviewContainer">
                        <p key={i}>{rev.review}</p>
                        <h6 key={j}>Reviewd by: {rev.reviewer.username}</h6>
                    </div>
                )} */}
            </div>
        </section>

    );
}

// Exports the UserReviewee component
export default UserReviewee;