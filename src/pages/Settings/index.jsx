import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import API from "../../utils/API"
import "./style.css"

export default function Settings(props) {
    const navigate = useNavigate()
    const [newUsername, setNewUsername] = useState();
    const [newEmail, setNewEmail] = useState();
    const [newPass, setNewPass] = useState('********');
    const [verifyPass, setVerifyPass] = useState();
    const [verifyBool, setVerifyBool] = useState(false);
    const [oldPass, setOldPass] = useState();
    const [verifyOldPass, setVerifyOldPass] = useState();

    useEffect(() => {
        if (!props.userId) {
            return
        }
        // Runs the getOneUser function from the API utils page
        API.getOneUser(props.userId).then((userData) => {
            // setUserObj(userData);
            setNewEmail(userData.email)
            setNewUsername(userData.username)
            setOldPass(userData.passowrd)
        });
    }, [props.userId]);

    const handleChange = (e) => {
        if (e.target.id === "username") {
            setNewUsername(e.target.value)
        } else if (e.target.id === "email") {
            setNewEmail(e.target.value)
        } else if (e.target.id === 'oldPassword') {
            setOldPass(e.target.value)
        } else if (e.target.id === 'password') {
            setNewPass(e.target.value)
            if (e.target.value === verifyPass) {
                setVerifyBool(true);
            } else {
                setVerifyBool(false);
            }
        } else if (e.target.id === 'verifyPassword') {
            setVerifyPass(e.target.value);
            if (e.target.value === newPass) {
                setVerifyBool(true);
            } else {
                setVerifyBool(false);
            }
        }
    }

    const verifyPassword = e => {
        const passedData = { password: oldPass, userId: props.userId }
        API.passwordVerification(passedData).then((verificationData) =>
            setVerifyOldPass(verificationData)
        )
    }

    const clearPassField = (e) => {
        if (e.target.value === "********") {
            e.target.value = ""
        }

    }

    const submitHandler = e => {
        e.preventDefault()
        let passedData = {}
        if (e.target.id == "saveUsername") {
            passedData = { username: newUsername, userId: props.userId }
        } else if (e.target.id == "saveEmail") {
            passedData = { email: newEmail, userId: props.userId }
        } else if (e.target.id == 'savePassword') {
            if (verifyPass === newPass) {
                setVerifyBool(true)
                passedData = { password: newPass, userId: props.userId }
                API.newUserPassword(passedData).then((newData) => { })
            } else {
                setVerifyBool(false)
                return
            }
        } else {
            // navigate("/profile")
        }
        API.editUserBio(passedData).then((newData) => { })
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Edit your account details
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" action="#" method="POST" onSubmit={submitHandler}>

                            <div>
                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                    Edit Username
                                </label>
                                <div className="flex mt-2">
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        value={newUsername}
                                        autoComplete="username"
                                        onChange={handleChange}
                                        required
                                        className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    />
                                     <button onClick={submitHandler} id="saveUsername" className='ml-5 flex w-1/5 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' >Save</button>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Edit Email address
                                </label>
                                <div className="mt-2 flex">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={newEmail}
                                        autoComplete="email"
                                        onChange={handleChange}
                                        required
                                        className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    />
                                    <button onClick={submitHandler} id="saveEmail" className='ml-5 flex w-1/5 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' >Save</button>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm old password
                                </label>
                                <div className="mt-2 flex">
                                    <input
                                        id="oldPassword"
                                        name="oldPassword"
                                        type="password"
                                        autoComplete="current-password"
                                        value={oldPass}
                                        onChange={handleChange}
                                        // onClick={clearPassField}
                                        // required
                                        className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                    />
                                    <button onClick={verifyPassword} id="saveEmail" className='ml-5 flex w-1/5 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' >Verify</button>
                                </div>
                            </div>
                            {verifyOldPass
                                ? <>                        <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        New Password
                                    </label>
                                    <div className="mt-2 flex">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            value={newPass}
                                            onChange={handleChange}
                                            onClick={clearPassField}
                                            // required
                                            className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Verify Password
                                        </label>
                                        <div className="mt-2 flex">
                                            <input
                                                id="verifyPassword"
                                                name="verifyPassword"
                                                type="password"
                                                autoComplete="current-password"
                                                // value={newPass}
                                                onChange={handleChange}
                                                // onClick={clearPassField}
                                                // required
                                                className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                                            />
                                            <button onClick={submitHandler} id="savePassword" className='ml-5 flex w-1/5 justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600' >Save</button>
                                        </div>
                                        {verifyBool
                                                ? <span className="verifySymbol">✔</span>
                                                : <span className="verifySymbol">❌</span>
                                            }
                                    </div>
                                </>
                                : <></>
                                
                            }
                                                                <div>
                                        <button
                                            type="submit"
                                            onClick={submitHandler}
                                            className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                                        >
                                            Return to Profile
                                        </button>
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
