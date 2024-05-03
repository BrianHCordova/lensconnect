import React, { useState, useEffect } from 'react'
import API from "../../utils/API"
import { useNavigate, Link } from 'react-router-dom'


export default function Report(props) {
  const navigate = useNavigate()
  const [newComment, setNewComment] = useState('N/A');
  const [payBool, setPayBool] = useState()
  const [bonoBool, setBonoBool] = useState()
  const [username, setUsername] = useState()
  const [searchedUser, setSearchedUser] = useState({})
  const [userFound, setUserFound] = useState()
  const [role, setRole] = useState('none')


  const userSearch = (event) => {
    event.preventDefault()
    API.getUserByUsername(username).then((userData) => {
      if (!userData) {
        setUserFound(false)
      } else {
        setUserFound(true)
      }
      setSearchedUser(userData);
    });
  }

  const postUserReport = () => {
    let passData = {}
    if (role === 'Photographer') {
      passData = { paid: payBool, voluntary: bonoBool, comment: newComment, hirerId: searchedUser.id, userId: props.userId }
    } else {
      passData = { paid: payBool, voluntary: bonoBool, comment: newComment, hirerId: props.userId, userId: searchedUser.id }
    }
    API.postUserReport(passData).then((newData) => {
    });
    navigate("/profile")
  }

  const handleRoleChange = (event) => {
    if (event.target.value === 'Photographer') {
      setRole('Photographer');
      console.log('p')
    } else {
      setRole('Hirer');
      console.log('h')
    }
  };

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

  const returnRoute = e => {
    navigate("/profile")
}

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
          <h3>* Note these reports are only viewed by our customer service and admin team</h3>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-neutral-200 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label className='text-gray-900 shadow-sm'>What was your role in the tansaction?</label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input  onChange={handleRoleChange} type="radio" name="role" value="Photographer" />
                  &nbsp;&nbsp;Photographer
                </label>
                <br />
                <label className='text-gray-900 shadow-sm'>
                  <input onChange={handleRoleChange} type="radio" name="role" value="Hirer" />
                  &nbsp;&nbsp;Hirer
                </label>
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  {role === "Photographer"
                    ? 'Username of person who hired you:'
                    : ''}
                  {role === "Hirer"
                    ? 'Username of person you hired:'
                    : ''}
                </label>
                <div className="mt-2 flex">
                  <input
                    onChange={handleUsernameInput}
                    type="text"
                    required
                    className="block w-4/5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                  />
                  {userFound
                    ? <h3 className='ml-5 flex w-1/5 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' >Found</h3>
                    : <button className='ml-5 flex w-1/5 justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' onClick={userSearch}>Search</button>
                  }
                </div>
              </div>

              {role === "Photographer"
                ? <>
                  <div>
                    <label className='text-gray-900 shadow-sm'>Did {searchedUser.username} pay you?</label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handlePayInput} type="radio" name="yesno" value="yes" />
                      &nbsp;&nbsp;Yes
                    </label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handlePayInput} type="radio" name="yesno" value="no" />
                      &nbsp;&nbsp;No
                    </label>
                  </div>
                  <div>
                    <label className='text-gray-900 shadow-sm'>Was this pro-bono work (free)</label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handleBonoInput} type="radio" name="noyes" value='yes' />
                      &nbsp;&nbsp;Yes
                    </label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handleBonoInput} type="radio" name="noyes" value="no" />
                      &nbsp;&nbsp;No
                    </label>
                  </div>
                </>
                : <></>
              }
              {role === "Hirer"
                ? <>
                  <div>
                    <label className='text-gray-900 shadow-sm'>Did you pay {searchedUser.username}?</label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handlePayInput} type="radio" name="yesno" value="yes" />
                      &nbsp;&nbsp;Yes
                    </label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handlePayInput} type="radio" name="yesno" value="no" />
                      &nbsp;&nbsp;No
                    </label>
                  </div>
                  <div>
                    <label className='text-gray-900 shadow-sm'>Was this pro-bono work (free)</label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handleBonoInput} type="radio" name="noyes" value='yes' />
                      &nbsp;&nbsp;Yes
                    </label>
                    <br />
                    <label className='text-gray-900 shadow-sm'>
                      <input onChange={handleBonoInput} type="radio" name="noyes" value="no" />
                      &nbsp;&nbsp;No
                    </label>
                  </div>
                </>
                : <></>
              }

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
            <div className="mt-2 flex">
            <button
                                onClick={returnRoute}
                                type="submit"
                                className="flex w-1/2 justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                            >
                                Cancel
                            </button>
              <button
                onClick={postUserReport}
                type="submit"
                className="flex w-1/2 justify-center rounded-md bg-emerald-700 ml-3 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
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
