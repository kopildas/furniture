import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



export default function Seles_Report() {

    const data = [
        {
          name: 'Jan',
          Via_Referral: 4000,
          Direct: 2400,
          Via_Social: 2400,
        },
        {
          name: 'Feb',
          Via_Referral: 3000,
          Direct: 1398,
          Via_Social: 2210,
        },
        {
          name: 'Mar',
          Via_Referral: 2000,
          Direct: 9800,
          Via_Social: 2290,
        },
        {
          name: 'Apr',
          Via_Referral: 2780,
          Direct: 3908,
          Via_Social: 2000,
        },
        {
          name: 'May',
          Via_Referral: 1890,
          Direct: 4800,
          Via_Social: 2181,
        },
        {
          name: 'Jun',
          Via_Referral: 2390,
          Direct: 3800,
          Via_Social: 2500,
        },
        {
          name: 'Jly',
          Via_Referral: 3490,
          Direct: 4300,
          Via_Social: 2100,
        },
      ];


  return (
    <div className='w-full h-full'>

<ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Via_Referral" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Direct" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Via_Social" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>

    </div>
  )
}
