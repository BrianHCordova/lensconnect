import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    console.log("Mobile menu closed");
    setMobileMenuOpen(false);
  };

  return (
    <Disclosure as="nav" className="bg-zinc-800 shadow-md shadow-white z-10 ">
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
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link to='/' className="rounded-md focus:bg-emerald-700 px-3 py-2 text-sm font-medium hover:bg-emerald-500 duration-200 ease-in-out text-white">
                      Home
                    </Link>
                    <Link
                      to={props.userId ? ('/profile') : ('/login')}
                      className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
                    >
                      Profile
                    </Link>

                    <Link
                      to='/search'
                      className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
                    >
                      Search
                    </Link>
                    <Link
                      to="/browse"
                      className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
                    >
                      Browse
                    </Link>
                    {props.userId ? (
                      <Link
                        to="/chat"
                        className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
                      >
                        Chat
                      </Link>

                    ) : (<></>)}
                    {props.userId ? (
                      <Link
                        to='/logout'
                        className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
                      >
                        Logout
                      </Link>
                    ) : (

                      <Link
                        to='/login'
                        className="rounded-md px-3 focus:bg-emerald-700 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 duration-200 ease-in-out hover:text-white"
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
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
                          src="https://source.unsplash.com/random"
                          alt=""
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
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Settings
                            </a>
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
              <Link to='/' className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" onClick={closeMobileMenu}>
                Home
              </Link>
              <Link
                to={props.userId ? ('/profile') : ('/login')}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>

              <Link
                to='/search'
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={closeMobileMenu}
              >
                Search
              </Link>
              <Link
                to="/browse"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={closeMobileMenu}
              >
                Browse
              </Link>
              {props.userId ? (
                <Link
                  to="/chat"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  Chat
                </Link>
              ) : null}
              {props.userId ? (
                <Link
                  to='/logout'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to='/login'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
                    src="https://source.unsplash.com/random"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white"></div>
                  <div className="text-sm font-medium text-gray-400"></div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Link
                  to='/profile'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  Your Profile
                </Link>
                <Link
                  to='/settings'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  onClick={closeMobileMenu}
                >
                  Settings
                </Link>
                <Link
                  to='/logout'
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
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
