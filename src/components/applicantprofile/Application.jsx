import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';

const Application = () => {
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState('pending');
    let redirect = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:2025/user/find');
            if (response.data.status) {
                setApplications(response.data.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAccept = async (em) => {
        var url = `http://localhost:2025/user/updatestatus?em=${em}`;
        let resp = await axios.get(url);
        if (resp.data.status) {
            alert(resp.data.msg);
            fetchData();
        } else {
            alert(resp.data.msg);
        }
    };

    const handleDecline = async (em) => {
        var url = `http://localhost:2025/user/updatedec?em=${em}`;
        let resp = await axios.get(url);
        if (resp.data.status) {
            alert(resp.data.msg);
            fetchData();
        } else {
            alert(resp.data.msg);
        }
    };

    const handlefranc = async (em) => {
        const password = nanoid(10); // Generate a random password
        const url = `http://localhost:2025/user/updatefranchise?em=${em}`;
        let resp = await axios.get(url);
        if (resp.data.status) {
            alert(resp.data.msg);
            fetchData();

            // Send email using emailjs
            const templateParams = {
                user_email: em,
                user_id: em,
                user_password: password
            };
            console.log('Sending email with params:', templateParams);

            emailjs.send('service_iad2v08', 'template_eikjgrg', templateParams, 'qao_mF_gYqsyFUDBu')
                .then((result) => {
                    alert("Mail sent to the user");
                    console.log('Email successfully sent!', result.text);
                }, (error) => {
                    console.error('Error sending email:', error.text);
                });
        } else {
            alert(resp.data.msg);
        }
    };

    const filteredApplications = applications.filter(app => {
        switch (activeTab) {
            case 'pending': return app.status === "0";
            case 'accepted': return app.status === "1";
            case 'declined': return app.status === "-1";
            case 'franchise': return app.status === "2";
            default: return true;
        }
    });

    return (
        <div className="container mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
            {/* Fixed Navigation */}
            <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                                <span className="text-white font-bold text-xl">F</span>
                            </div>
                            <h1 className="text-2xl font-bold text-blue-700">Franchise Hub</h1>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <Link to="/" className="font-medium text-gray-800 hover:text-blue-600 transition duration-300">Home</Link>
                        </nav>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg">
                        <div className="container mx-auto px-4 py-3">
                            <nav className="flex flex-col space-y-3">
                                <Link to="/" className="text-gray-800 hover:text-blue-600 transition duration-300" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            </nav>
                        </div>
                    </div>
                )}
            </header>

            <div className="bg-white w-full rounded-lg shadow-lg p-6 mt-16">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Franchise Applications</h1>

                {/* Tabs */}
                <div className="flex justify-center mb-6 border-b">
                    {['pending', 'accepted', 'declined', 'franchise'].map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 px-4 mr-2 ${activeTab === tab ? 'border-b-2 border-blue-500 font-bold text-blue-500' : 'text-gray-600 hover:text-blue-500 transition duration-300'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}{/*here first letter capital and others small*/    }
                        </button>
                    ))}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">Sr. No.</th>
                                <th className="px-4 py-3 text-left">Name</th>
                                <th className="px-4 py-3 text-left">Date of Application</th>
                                <th className="px-4 py-3 text-left">Contact</th>
                                <th className="px-4 py-3 text-left">Existing Business</th>
                                <th className="px-4 py-3 text-left">Location</th>
                                <th className="px-4 py-3 text-left">Dimension</th>
                                <th className="px-4 py-3 text-left">City</th>
                                {['pending', 'accepted', 'franchise'].includes(activeTab) && <th className="px-4 py-3 text-left">Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredApplications.map((app, index) => (
                                <tr key={app._id} className="border-b hover:bg-gray-50 transition duration-300">
                                    <td className="px-4 py-3 text-center">{index + 1}</td>
                                    <td className="px-4 py-3">{app.txtname}</td>
                                    <td className="px-4 py-3">{new Date(app.date_of_application).toLocaleDateString()}</td>
                                    <td className="px-4 py-3">{app.cont}</td>
                                    <td className="px-4 py-3">{app.exb}</td>
                                    <td className="px-4 py-3">{app.sadd}</td>
                                    <td className="px-4 py-3">{app.area} sq ft</td>
                                    <td className="px-4 py-3">{app.city}</td>
                                    {activeTab === 'pending' && (
                                        <td className="px-4 py-3 space-x-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300" onClick={() => { redirect(`/getinfo/${app.em}`) }}>
                                                Info
                                            </button>
                                            <button
                                                onClick={() => handleAccept(app.em)}
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-300"
                                            >
                                                Accept
                                            </button>
                                            <button
                                                onClick={() => handleDecline(app.em)}
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300"
                                            >
                                                Decline
                                            </button>
                                        </td>
                                    )}
                                    {activeTab === 'accepted' && (
                                        <td className="px-4 py-3 space-x-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300" onClick={() => { redirect(`/getinfo/${app.em}`) }}>
                                                Info
                                            </button>
                                            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300" onClick={() => handlefranc(app.em)}>
                                                Franchise
                                            </button>
                                        </td>
                                    )}
                                    {activeTab === 'franchise' && (
                                        <td className="px-4 py-3 space-x-2">
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-300" onClick={() => { redirect(`/getinfo/${app.em}`) }}>
                                                Info
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Application;