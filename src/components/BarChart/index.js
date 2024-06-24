import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import axios from 'axios';
import './index.css';

const BarChartComponent = (props) => {
  const [barChartData, setBarChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { selectedMonth } = props;

  useEffect(() => {
    const getBarChartData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/bar-chart-data?month=${selectedMonth}`);
        setBarChartData(response.data);
      } catch (error) {
        setError('Error fetching bar chart data!');
        console.error('Error fetching bar chart data!:', error);
      } finally {
        setLoading(false);
      }
    };

    getBarChartData();
  }, [selectedMonth]);

  const DataFormatter = (number) => {
    if (number > 1000) {
      return `${(number / 1000).toFixed(1)}k`;
    }
    return number.toString();
  };

  if (loading) {
    return <div className="barchart-container">Loading...</div>;
  }

  if (error) {
    return <div className="barchart-container">{error}</div>;
  }

  return (
    <div className='barchart-container'>
      <h2>Bar Chart Status - {selectedMonth}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={Array.isArray(barChartData) ? barChartData : []} margin={{ top: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="priceRange"
            tick={{ stroke: 'gray', strokeWidth: 1 }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{ stroke: 'gray', strokeWidth: 1 }}
          />
          <Legend wrapperStyle={{ padding: 30 }} />
          <Bar dataKey="itemCount" name="Number of Items" fill="#37807e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
