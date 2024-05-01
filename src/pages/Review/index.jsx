import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import API from "../../utils/API"
import './style.css'
import { useNavigate, Link } from 'react-router-dom'

export default function Review(props) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [userObj, setUserObj] = useState({});
  const [newReview, setNewReview] = useState('')
  const [newRating, setNewRating] = useState()
  const [reviewArr, setReviewArr] = useState()
  useEffect(() => {
    // Fetches the reviewee users data
    API.getOneUser(id).then((userData) => {
      setUserObj(userData);
    });
    // Fetches the revieww users reviews as a revieww (reviews about the user)
    API.getReviewsByReviewee(id).then((revData) => {
      setReviewArr(revData)
    });
  }, [])


  // Function to post the review
  const postUserReview = () => {
    // Creates an object with all the necesary data for the review
    const passData = { review: newReview, rating: newRating, revieweeId: id, userId: props.userId }
    // Performs the fetch request from the API untils page
    API.postUserReview(passData).then((newData) => {
    });
    // creates an average and a converts the new review rating to a float
    let average = userObj.averageRating
    let floated = parseFloat(newRating)
    // Adds the new review rating to the reviewee's average
    average += floated
    // A check to ensure we arent dividing by 0
    if (userObj.averageRating > 0) {
      // divide by the lenght of reviews as reviewee plus 1
      // Plus one as the data doesnt account for the review just posted in this function
      average /= reviewArr.length + 1
    }
    // Creates an object for the data passed into the edit user function
    const newAverage = { userId: id, averageRating: average }
    // Performs the fetch request from the API untils page
    API.editUserBio(newAverage).then((newData) => {
    });
    // takes the user back to the homepage
    navigate("/profile")
  }

  // Hooks to handle the review content and rating change
  const handleReviewInput = (event) => {
    setNewReview(event.target.value);
  };
  const handleRatingInput = (event) => {
    setNewRating(event.target.value);
  };

  // HTML

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-zinc-800">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Leave A Review
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-neutral-200 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <h2 className='text-gray-900 shadow-sm'>Reviewing: {userObj.username}</h2>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Review
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={handleReviewInput}
                    rows="15"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </form>
            <div className="rating ratingRadio">
              <input onChange={handleRatingInput} type="radio" id="star5" name="rate" value="5" required />
              <label title="Excellent!" htmlFor="star5">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  ></path>
                </svg>
              </label>
              <input onChange={handleRatingInput} value="4" name="rate" id="star4" type="radio" />
              <label title="Great!" htmlFor="star4">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  ></path>
                </svg>
              </label>
              <input onChange={handleRatingInput} value="3" name="rate" id="star3" type="radio" />
              <label title="Good" htmlFor="star3">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  ></path>
                </svg>
              </label>
              <input onChange={handleRatingInput} value="2" name="rate" id="star2" type="radio" />
              <label title="Okay" htmlFor="star2">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  ></path>
                </svg>
              </label>
              <input onChange={handleRatingInput} value="1" name="rate" id="star1" type="radio" />
              <label title="Bad" htmlFor="star1">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <button
                onClick={postUserReview}
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
