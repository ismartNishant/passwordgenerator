import { HiLockClosed } from 'react-icons/hi2';

import React from 'react'
import { Menu, X } from 'lucide-react';
import "../App.css";



export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="fixed w-full bg-white shadow-lg z-10 top-0 right-0 left-0">
            <div className="mx-auto flex  items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
                <div className="inline-flex items-center space-x-2 ">
                    <span>
                        <HiLockClosed size={40} />
                    </span>
                    <span className="text-3xl font-bold ">PASW-Generator</span>
                </div>

                <div className="hidden space-x-2  lg:block">
                    <button
                        onClick={() => document.body.style.backgroundColor = "rgb(129 140 248 )"}
                        type="button"
                        className="rounded-md bg-transparent px-3 py-2 text-lg font-semibold  bg-indigo-400 text-white hover:bg-indigo-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Indigo Theme
                    </button>
                    <button onClick={() => document.body.style.backgroundColor = "#fff"}

                        type="button"
                        className="rounded-md border hover:bg-indigo-400 hover:text-black border-indigo-400 px-3 py-2 text-sm font-medium text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >
                        Default Theme
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform  transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-2">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <HiLockClosed size={30} />
                                        </span>
                                        <span className="text-2xl font-bold ">PASW-Generator</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-2 justify-center  gap-2 mx-auto flex items-center ">
                                    <button
                                        onClick={() => document.body.style.backgroundColor = "rgb(129 140 248 )"}
                                        type="button"
                                        className="rounded-md bg-transparent px-3 py-2 text-lg font-semibold  bg-indigo-400 text-white hover:bg-indigo-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Indigo Theme
                                    </button>
                                    <button onClick={() => document.body.style.backgroundColor = "#fff"}

                                        type="button"
                                        className="rounded-md border hover:bg-indigo-400 hover:text-black border-indigo-400 px-3 py-2 text-sm font-medium text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                    >
                                        Default Theme
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
