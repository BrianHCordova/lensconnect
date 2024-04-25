function UserReviewee(props) {
    console.log(props)
    // HTML
    return (

        <section >
            <div className="columns-1 reviews">
                <h2>Reviews About Me</h2>
                {props.reviews?.map((rev, i) =>
                    <div key={i} className="reviewContainer">
                        <p>{rev.review}</p>
                        <h6>Reviewd by: {rev.reviewer.username}</h6>
                    </div>
                    
                )}
                {/* <h6 key={j}>Reviewd by: {rev.reviewer.username}</h6> */}
            </div>
        </section>

    );
}

// Exports the UserReviewee component
export default UserReviewee;