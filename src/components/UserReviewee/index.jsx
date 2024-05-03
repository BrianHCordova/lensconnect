import React, { useEffect, useState } from "react";

function UserReviewee(props) {
    console.log(props)


    const [averageRating, setAverageRating] = useState()


    useEffect(() => {
        if (!props.reviews) {
            return
        }
        let average = 0
        for(let i = 0; i < props.reviews.length; i++) {
            average += props.reviews[i].rating
        }
        average /= props.reviews.length
        setAverageRating(average)
    }, [props.reviews]);


    const generateStars = (rating) => {
        if (rating >= 4.5) {
            return '★★★★★'
        } else if (rating <= 4.5 && rating >= 3.6) {
            return '★★★★'
        } else if (rating <= 3.5 && rating >= 2.6) {
            return '★★★'
        } else if (rating <= 2.5 && rating >= 1.6) {
            return '★★'
        } else if (rating < 0 && rating >= 1.6) {
            return '★'
        } else {
            return "No reviews yet"
        }
    };

    // HTML
    return (

        <section className="userInfoSection bg-zinc-900" >
            <div className="columns-1 reviews">
                <h2>Reviews About Me</h2>
                <h3>Average Rating: {generateStars(averageRating)}</h3>
                {props.reviews?.map((rev, i) =>
                    <div key={i} className="reviewContainer">
                        <p>{rev.review}</p>
                        <h6>Rating: {generateStars(rev.rating)}</h6>
                        <h6>Reviewd by:{rev.reviewer.username}</h6>
                    </div>

                )}
            </div>
        </section>

    );
}

// Exports the UserReviewee component
export default UserReviewee;