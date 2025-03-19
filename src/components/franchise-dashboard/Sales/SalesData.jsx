import React, { useState } from 'react';
import axios from 'axios';

const SalesData = () => {
  const [formData, setFormData] = useState({
    month: '',
    year: '',
    date: '',
    totalSales: '',
    customersVisited: ''
  });

  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Here you would typically send the data to your backend
    
    // Clear form after submission
    setFormData({
      month: '',
      year: '',
      date: '',
      totalSales: '',
      customersVisited: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  async function dosave()
  {
    let url="http://localhost:2025/user/salessave";
    let resp=await axios.post(url,formData, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    if(resp.data.status==true)
    {
      alert(resp.data.msg);

    }
    else{
      alert(resp.data.msg);
    }
  }

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="  min-h-screen bg-gradient-to-r from-gray-100 to-gray-500">
      <div className="p-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
           <center><b>Daily Sales Data</b></center> 
          </h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <select
                  name="date"
                  id="date"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.date}
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
                <label htmlFor="month" className="block text-sm font-medium text-gray-700">
                  Month
                </label>
                <select
                  name="month"
                  id="month"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.month}
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
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <select
                  name="year"
                  id="year"
                  required
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.year}
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
            </div>

            <div>
              <label htmlFor="totalSales" className="block text-sm font-medium text-gray-700">
                Total Sales ($)
              </label>
              <input
                type="number"
                name="totalSales"
                id="totalSales"
                required
                min="0"
                step="0.01"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md shadow-sm"
                placeholder="0.00"
                value={formData.totalSales}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="customersVisited" className="block text-sm font-medium text-gray-700">
                Customers Visited
              </label>
              <input
                type="number"
                name="customersVisited"
                id="customersVisited"
                required
                min="0"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md shadow-sm"
                placeholder="0"
                value={formData.customersVisited}
                onChange={handleChange}
              />
            </div>
            <div >
              
            </div>
          </div>

          <div>
            <button
              type="submit"
              className=" ml-96  py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              onClick={dosave}
            >
              Publish Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SalesData;