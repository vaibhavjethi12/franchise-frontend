import React, { useState } from "react";
import axios from 'axios';

function SalesHistory() {
    const [formData, setFormData] = useState({
        fromDate: '',
        fromMonth: '',
        fromYear: '',
        toDate: '',
        toMonth: '',
        toYear: ''
    });

    const [salesData, setSalesData] = useState([]);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const dofind = async () => {
        const queryString = `fromDate=${formData.fromDate}&fromMonth=${formData.fromMonth}&fromYear=${formData.fromYear}&toDate=${formData.toDate}&toMonth=${formData.toMonth}&toYear=${formData.toYear}`;
        const url = `https://franchise-backend-production-56f7.up.railway.app/user/getsales?${queryString}`;
        
        try {
            let resp = await axios.get(url);
            if (resp.data.status === true) {
                alert(resp.data.msg);
                setSalesData(resp.data.data);
            } else {
                alert(resp.data.msg);
            }
        } catch (error) {
            console.error("Error fetching sales data:", error);
            alert("Error fetching sales data");
        }
    };
    const formatDate = (date, month, year) => {
        return `${date}/${month}/${year}`;
    };
    var sum=0;

    return (
        <div className="p-8">
            <div className="flex gap-2">
                <h1><b className="text-xl">From:</b></h1>
                <div className="ml-16">
                    <label htmlFor="fromDate" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <select
                        name="fromDate"
                        id="fromDate"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.fromDate}
                        onChange={handleChange}
                    >
                        <option value="">Date</option>
                        {days.map(day => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="fromMonth" className="block text-sm font-medium text-gray-700">
                        Month
                    </label>
                    <select
                        name="fromMonth"
                        id="fromMonth"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.fromMonth}
                        onChange={handleChange}
                    >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                            <option key={month} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="fromYear" className="block text-sm font-medium text-gray-700">
                        Year
                    </label>
                    <select
                        name="fromYear"
                        id="fromYear"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.fromYear}
                        onChange={handleChange}
                    >
                        <option value="">Year</option>
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <h1><b className="ml-8 text-xl">To:</b></h1>
                <div className="ml-16">
                    <label htmlFor="toDate" className="block text-sm font-medium text-gray-700">
                        Date
                    </label>
                    <select
                        name="toDate"
                        id="toDate"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.toDate}
                        onChange={handleChange}
                    >
                        <option value="">Date</option>
                        {days.map(day => (
                            <option key={day} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="toMonth" className="block text-sm font-medium text-gray-700">
                        Month
                    </label>
                    <select
                        name="toMonth"
                        id="toMonth"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.toMonth}
                        onChange={handleChange}
                    >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                            <option key={month} value={index + 1}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="toYear" className="block text-sm font-medium text-gray-700">
                        Year
                    </label>
                    <select
                        name="toYear"
                        id="toYear"
                        required
                        className="mt-1 block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={formData.toYear}
                        onChange={handleChange}
                    >
                        <option value="">Year</option>
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-48 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-amber-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        onClick={dofind}
                    >
                        Search
                    </button>
                </div>
            </div>
            {/* {JSON.stringify(salesData)} */}

            {/* Display Sales Data in Table */}
            {salesData.length > 0 && (
                
                <div className="mt-8">
                    <table className="min-w-full bg-white shadow-md rounded">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Total coustomers visited</th>
                                <th className="px-4 py-3">Total Sales</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map((sale, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    
                                    <td className="px-4 py-3">{formatDate(sale.date,sale.month,sale.year)   }</td>

                                    <td className="px-4 py-3">{sale.totalSales}</td>
                                    
                                    <td className="px-4 py-3">{sale.customersVisited}</td>
                                    <td className="px-4 py-3">{sum+=sale.totalSales}</td>
                                </tr>
                                
                            ))}
                           
                        </tbody>

                    </table>
                    <h1 className="ml-96 mt-10 text-xl"><b>Total Sales</b>: {sum}</h1>
                </div>
            )}
        </div>
    );
}

export default SalesHistory;