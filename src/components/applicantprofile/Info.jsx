import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Info() {
    const [obj, setObj] = useState({});
    const param = useParams();
    let redirect = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("ERR" + param.em)
                const url = `http://localhost:2025/user/getinfo?em=${param.em}`;
                const resp = await axios.get(url);
                setObj(resp.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-8  min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-500">
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Franchise Application Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Name</label>
                        <input
        bg-gradient-to-r from-gray-100 to-gray-500                    type="text"
                            value={obj.txtname || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            value={obj.em || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Contact */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Contact</label>
                        <input
                            type="text"
                            value={obj.cont || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Address</label>
                        <input
                            type="text"
                            value={obj.add || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Existing Business */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Existing Business</label>
                        <input
                            type="text"
                            value={obj.exb || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Site Address */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Site Address</label>
                        <input
                            type="text"
                            value={obj.sadd || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* City */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">City</label>
                        <input
                            type="text"
                            value={obj.city || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* State */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">State</label>
                        <input
                            type="text"
                            value={obj.state || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Area */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Area (sq ft)</label>
                        <input
                            type="text"
                            value={obj.area || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Pincode */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Pincode</label>
                        <input
                            type="text"
                            value={obj.pin || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Ownership */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Ownership</label>
                        <input
                            type="text"
                            value={obj.radio || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                    {/* Floor */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold">Floor</label>
                        <input
                            type="text"
                            value={obj.floor || ''}
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            readOnly
                        />
                    </div>
                </div>
                <center> <button
                    type="button"
                    className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 mt-6 w-full md:w-auto"
                    onClick={() => redirect("/back")}
                >
                    Back to Application
                </button></center>
               
            </div>
        </div>
    );
}

export default Info;