import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import { useNavigate, Link } from 'react-router-dom'


export default function Report(props) {
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('N/A');
  const [payBool, setPayBool] = useState()
  const [bonoBool, setBonoBool] = useState()
  const [username, setUsername] = useState()
  const [hirer, setHirer] = useState({})
  // const [review, setReview] = useState()
  const [userFound, setUserFound] = useState()

  const userSearch = (event) => {
    event.preventDefault()
    API.getUserByUsername(username).then((userData) => {
      if(!userData){
        setUserFound(false)
      }else {
        setUserFound(true)
      }
      setHirer(userData);
      console.log(hirer)
  });
  }

  const postUserReport = () => {
    const passData = { paid: payBool, voluntary: bonoBool, comment: newComment, hirerId: hirer.id, userId: props.userId }
    console.log(passData)
    API.postUserReport(passData).then((newData) => {
    });
    navigate("/profile")
  }

  const handleCommentInput = (event) => {
    setNewComment(event.target.value);
  };

  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };

  const handlePayInput = (event) => {
    if (event.target.value === 'yes') {
      setPayBool(true);
    } else {
      setPayBool(false);
    }
  };

  const handleBonoInput = (event) => {
    if (event.target.value === 'yes') {
      setBonoBool(true);
    } else {
      setBonoBool(false);
    }
  };


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
            Transaction Report
          </h2>
          <h3>* Note these eports are only viewed by our customer service and admin team</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-neutral-200 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username of person who hired you
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleUsernameInput}
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                  {userFound
                ? <h3 className='text-green-600' >User Found</h3>
                : <button className='text-orange-600' onClick={userSearch}>Search for User</button> 
                }
                </div>
              </div>
              <div>
                <label className='text-gray-900 shadow-sm'>Did they pay you?</label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input onChange={handlePayInput} type="checkbox" name="yesno" value="yes" />
                  Yes
                </label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input onChange={handlePayInput} type="checkbox" name="yesno" value="no" />
                  No
                </label>
              </div>
              <div>
                <label className='text-gray-900 shadow-sm'>Was this pro-bono work (free)</label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input onChange={handleBonoInput} type="checkbox" name="yesno" value='yes' />
                  Yes
                </label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input onChange={handleBonoInput} type="checkbox" name="yesno" value="no" />
                  No
                </label>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Comment
                </label>
                <div className="mt-2">
                  <textarea
                    onChange={handleCommentInput}
                    rows="15"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* <label className='text-gray-900 shadow-sm'>
                <input type="checkbox" name="yesno" value="yes" />
                request a review?
              </label> */}
            </form>
            <div>
              <button
                onClick={postUserReport}
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
