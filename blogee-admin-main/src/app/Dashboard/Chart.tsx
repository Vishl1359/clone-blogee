"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; 
import { TbBorderCornerRounded } from 'react-icons/tb';

// Registering the components required for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BalanceChart = () => {
  const data = {
    labels: ['Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'User count',
        data: [300, 400, 500, 300, 400, 500, 600, 500, 600, 700],
        backgroundColor: '	rgb(64, 0, 255)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        borderRadius: 10
      },
      {
        label: 'Post count',
        data: [200, 300, 400, 200, 300, 400, 500, 400, 500, 600],
        backgroundColor: 'rgb(141, 145, 196)',
        borderColor: 'rgba(153, 102, 255, 1)',
        
        borderWidth: 0.5,
        borderRadius: 10
        
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Usercount vs postcount',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="w-full h-[50vh] sm:h-[40vh] lg:h-[50vh] sm:w-'[40vh] lg:w-[130vh] bg-white rounded-md mb-4 ">
      <h1 className='text-black text-xl font-bold mt-1 pt-1'>Balance</h1>
      <Bar data={data} options={options} width={400} className='text-black shadow-xl   ' />
    </div>
  );
};

export default BalanceChart;
