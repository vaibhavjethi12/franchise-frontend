import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Curd = () => {
    const [obj, setObj] = useState({
        em: "",
        txtname: "",
        cont: "",
        add: "",
        exb: "",
        dosi: "",
        sadd: "",
        city: "",
        area: "",
        pin: "",
        radio: "",
        state: "",
        floor: "",
        status: "0",
    });

    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function doUpdate(event) {
        const { name, value } = event.target;
        setObj({ ...obj, [name]: value });
    }

    async function dosave() {
        const url = "https://franchise-back2-production.up.railway.app/user/savepost";
        let resp = await axios.post(url, obj, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        if (resp.data.status === true) {
            alert(resp.data.msg);
        } else {
            alert(resp.data.msg);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Fixed Navigation */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="h-10 w-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <h1 className="text-2xl font-bold text-blue-700">Franchise Hub</h1>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="font-medium text-gray-800 hover:text-blue-600">Home</Link>
                            
                        </nav>

                        
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg">
                        <div className="container mx-auto px-4 py-3">
                            <nav className="flex flex-col space-y-3">
                                <Link to="/" className="text-gray-800 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                                
                            </nav>
                        </div>
                    </div>
                )}
            </header>

            <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#282D2D] px-5 pt-28 ">
                <div className="flex flex-col items-end justify-start overflow-hidden mb-2 xl:max-w-3xl w-full">
                    <div className="flex">
                        <h3 className="text-blue-200    ">Dark Mode : &nbsp;</h3>
                        <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={darkMode}
                                readOnly
                            />
                            <div
                                onClick={() => {
                                    setDarkMode(!darkMode);
                                }}
                                className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                            ></div>
                        </label>
                    </div>
                </div>
                <div
                    className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
                        }  w-full p-5 sm:p-10 rounded-md`}
                >
                    <h1
                        className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                            }`}
                    >
                        Apply for a Franchise
                    </h1>
                    <div className="w-full mt-8">
                        <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="txtname" onChange={doUpdate}
                                    placeholder="Your Good Name"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="em" onChange={doUpdate}
                                    placeholder="Email Id "
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="cont" onChange={doUpdate}
                                    placeholder="Contact"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="add" onChange={doUpdate}
                                    placeholder="Address"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="exb" onChange={doUpdate}
                                    placeholder="Existing business "
                                />
                                <select
                                    className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    name="dosi" onChange={doUpdate}
                                >
                                    <option value="none">Doing since</option>
                                    <option value="1950">1950</option>
                                    <option value="1951">1951</option>
                                    <option value="1952">1952</option>
                                </select>
                            </div>
                            <h1
                                className={`text-center text-lg sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
                                    }`}
                            >
                                Site Information
                            </h1>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="sadd" onChange={doUpdate}
                                    placeholder="Site Address"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="floor" onChange={doUpdate}
                                    placeholder="Floor"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="city" onChange={doUpdate}
                                    placeholder="City"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="state" onChange={doUpdate}
                                    placeholder="State"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="area" onChange={doUpdate}
                                    placeholder="Total Area in Sq"
                                />
                                <input
                                    className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="text" name="pin" onChange={doUpdate}
                                    placeholder="Pincode"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="xl:ml-40 sm:ml-8 flex items-center">
                                    <input id="green-radio" type="radio" value="owned" name="radio" onChange={doUpdate} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Owned</label>
                                </div>
                                <div className="ml-8 sm:ml-8 flex items-center">
                                    <input id="orange-radio" type="radio" value="rented" name="radio" onChange={doUpdate} className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="orange-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rented</label>
                                </div>
                            </div>
                            <button className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={dosave}>
                                <svg
                                    className="w-6 h-6 -ml-2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="8.5" cy="7" r="4" />
                                    <path d="M20 8v6M23 11h-6" />
                                </svg>
                                <span className="ml-3">Register</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-10 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Franchise Hub</h3>
              <p className="text-gray-400">Empowering Entrepreneurs </p>
            </div>
            
          </div>
          <div className="mt-8 text-center text-gray-400">
            &copy; 2025 Franchise Hub. All rights reserved.
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Curd;