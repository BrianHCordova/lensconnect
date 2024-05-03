import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import API from '../utils/API';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profilePic, setProfilePic] = useState()

  const closeMobileMenu = () => {
    console.log("Mobile menu closed");
    setMobileMenuOpen(false);
  };

  useEffect(() => {

    if (!props.userId) {
        return
    }
    API.getSingleUserImages(props.userId).then((data) => {

        for (let i = 0; i < data.length; i++) {
            if (data[i].isProfilePic === true) {
                console.log(data[i])
                const url = data[i].imageUrl
                setProfilePic(url)
                console.log(profilePic)
            } else {

            }
        }
    })
}, [props.userId])

  return (
    <Disclosure as="nav" className="bg-zinc-800 shadow-md shadow-[rgb(0,0,0,0.5)] z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 "> {/* Adjusted padding here */}
            <div className="flex h-20 items-center justify-between"> {/* Increased height here */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link to='/' className="rounded-md focus:bg-cyan-800 px-3 py-2 text-sm font-medium hover:bg-cyan-600 duration-200 ease-in-out hover:text-black">
                      Home
                    </Link>
                    <Link
                      to={props.userId ? ('/profile') : ('/login')}
                      className="rounded-md px-3 focus:bg-cyan-800 py-2 text-sm font-medium text-gray-300 hover:bg-cyan-600 duration-200 ease-in-out hover:text-black"
                    >
                      Profile
                    </Link>

                    <Link
                      to='/search'
                      className="rounded-md px-3 focus:bg-cyan-800 py-2 text-sm font-medium text-gray-300 hover:bg-cyan-600 duration-200 ease-in-out hover:text-black"
                    >
                      Search
                    </Link>
                    <Link
                      to="/browse"
                      className="rounded-md px-3 focus:bg-cyan-800 py-2 text-sm font-medium text-gray-300 hover:bg-cyan-600 duration-200 ease-in-out hover:text-black"
                    >
                      Browse
                    </Link>
                    {props.userId ? (
                      <Link
                        to="/chat"
                        className="rounded-md px-3 focus:bg-cyan-800 py-2 text-sm font-medium text-gray-300 hover:bg-cyan-600 duration-200 ease-in-out hover:text-black"
                        >
                        Chat
                      </Link>

                    ) : (<></>)}
                    {props.userId ? (
                      <></>
                    ) : (

                      <Link
                        to='/login'
                        className="rounded-md px-3 focus:bg-cyan-800 py-2 text-sm font-medium text-gray-300 hover:bg-cyan-600 duration-200 ease-in-out hover:text-black"
                        >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="relative rounded-full bg-zin-800 p-1 text-gray-400 hover:text-white duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={profilePic ? profilePic : '/defaultProfile.png'}
                          alt="profile picture of the user"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                            to={props.userId ? ('/profile') : ('/login')}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/settings"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/logout"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            // onClick={props.handleSubmit()}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Link to='/' className="block rounded-md bg-zinc-900 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out px-3 py-2 text-base font-medium text-white" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link
                to='/search'
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
              <Link
                to="/browse"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                onClick={closeMobileMenu}
              >
                Browse
              </Link>
              {props.userId ? (
                <Link
                  to="/chat"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                  onClick={closeMobileMenu}
                >
                  Chat
                </Link>
              ) : null}
              {props.userId ? (
                <></>
              ) : (
                <Link
                  to='/login'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              )}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={profilePic ? profilePic : '/defaultProfile.png'}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white"></div>
                  <div className="text-sm font-medium text-gray-400"></div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-zinc-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Link
                  to={props.userId ? ('/profile') : ('/login')}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                  onClick={closeMobileMenu}
                >
                  Your Profile
                </Link>
                <Link
                  to='/settings'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
                <Link
                  to='/logout'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:text-black hover:bg-cyan-600 duration-100 ease-in-out"
                  onClick={closeMobileMenu}
                >
                  Sign out
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
