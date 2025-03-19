import React, { useState } from "react";
import axios from 'axios';

function Settings() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    var userId = localStorage.getItem("userId");

    const handleSubmit = async () => {

        // Add your password change logic here
        {
            if (formData.newPassword != formData.confirmPassword) {
                alert("New Password and Confirm Password should be same");
                return;
            }
            else {
                var url = `http://localhost:2025/user/changepassword?userId=${userId}&oldpass=${formData.oldPassword}&newpass=${formData.newPassword}`;
                let resp = await axios.get(url);
                if (resp.data.status == true) {
                    alert(resp.data.msg);
                }
                else {
                    alert(resp.data.msg);
                }

            }
        }


    };

    return (
        <div className="mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-500 ">
            <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>
            <form >
                <div className="mb-4">
                    <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                        Old Password
                    </label>
                    <input
                        id="oldPassword"
                        name="oldPassword"
                        type="password"
                        value={formData.oldPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your old password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                        New Password
                    </label>
                    <input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Enter your new password"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Confirm your new password"
                        required
                    />
                </div>
                <input type="button"
                    className="ml-96 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200" value="Change Password" onClick={handleSubmit}
                >

                </input>
            </form>
        </div>
    );
}

export default Settings;