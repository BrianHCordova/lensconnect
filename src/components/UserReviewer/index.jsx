import { useNavigate } from 'react-router-dom'

function UserReviewer(props) {
      const navigate = useNavigate()
    // Hook t0 route to a review page
    const handleChatOpen = () => {
        navigate("/review");
    }


    // HTML
    return (

        <section className="userReviewSection bg-zinc-900" >
            <div className=" reviews ">
                <h3>Reviews I've Written</h3>
                {props.reviews?.map((rev, i, j) =>
                    <div className="newReviewContainer">
                        <p key={i}>{rev.review}</p>
                        <h6 key={j}>Review for: {rev.reviewee.username}</h6>
                    </div>
                )}
            </div>
            <div className="container writeBtnWrap">
                    <button className="writeBtn bg-zinc-700" onClick={handleChatOpen}>Write A Review</button>
                </div>
        </section>

    );
}

// Exports the UserReviewer component
export default UserReviewer;