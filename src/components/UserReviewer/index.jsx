import { useNavigate } from 'react-router-dom'

function UserReviewer(props) {
      const navigate = useNavigate()
    // Hook t0 route to a review page
    const handleChatOpen = () => {
        navigate("/review");
    }

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

        <section className="userReviewSection bg-zinc-900" >
            <div className=" reviews ">
                <h3>Reviews I've Written</h3>
                <div className='flex flex-col'>

                {props.reviews?.map((rev, i, j) =>
                    <div className="reviewContainer text-start">
                        <p key={i}>{rev.review}</p>
                        <h6>Rating: {generateStars(rev.rating)}</h6>
                        <h6 key={j}>Review for: {rev.reviewee.username}</h6>
                    </div>
                )}
                </div>
            </div>
            <div className="container writeBtnWrap">
                    <button className=" bg-zinc-700 rounded-md" onClick={handleChatOpen}>Write A Review</button>
                </div>
        </section>

    );
}

// Exports the UserReviewer component
export default UserReviewer;