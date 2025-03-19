import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Charts = () => {
  const [dailySalesData, setDailySalesData] = useState([]);
  const [monthlySalesData, setMonthlySalesData] = useState([]);

  useEffect(() => {
    // Fetch daily sales data
    axios.get('http://localhost:2025/user/daily-sales')
      .then(response => {
        if (response.data.status) {
          setDailySalesData(response.data.data);
        } else {
          alert(response.data.msg);
        }
      })
      .catch(error => {
        console.error("Error fetching daily sales data:", error);
      });

    // Fetch monthly sales data
    axios.get('http://localhost:2025/user/monthly-sales')
      .then(response => {
        if (response.data.status) {
          setMonthlySalesData(response.data.data);
        } else {
          alert(response.data.msg);
        }
      })
      .catch(error => {
        console.error("Error fetching monthly sales data:", error);
      });
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="p-8 h-screen">
      <center>
      <h2 className="text-xl font-bold mb-6">Sales Data Charts</h2>
        
      </center>
      
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Daily Sales Data (Line Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailySalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalSales" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="customersVisited" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Daily Sales Data (Pie Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dailySalesData}
                dataKey="totalSales"
                nameKey="date"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {dailySalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Monthly Sales Data (Bar Chart)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={monthlySalesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSales" fill="#8884d8" />
            <Bar dataKey="customersVisited" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;