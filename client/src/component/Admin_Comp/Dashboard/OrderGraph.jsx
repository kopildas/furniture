import axios from "axios";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import { useEffect, useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { toast } from "react-toastify";
import { useStateValue } from "../../../context/StateProvider";

export default function OrderGraph() {
  const [{ product, user }, dispatch] = useStateValue();

  // const [data, setData] = useState(product);
  const [userData, setUserData] = useState(null);
  const chartRef = useRef(null); // Create a ref for the chart component

  async function fetchData() {
    // Your fetchData function here
  }

 

  
  
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 400 },
    { name: 'Group D', value: 300 },
    { name: 'Group E', value: 40 },
  ];
  
  const COLORS = ['#0088FE', 'rgb(74 222 128 / var(--tw-bg-opacity))', 'rgb(250 204 21 / var(--tw-bg-opacity))', 'rgb(251 146 60 / var(--tw-bg-opacity))','rgb(220 38 38 / var(--tw-bg-opacity))'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={110}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  );
}
