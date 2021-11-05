import * as React from 'react';
import './App.css';
import   { PureComponent } from 'react';
import {LineChart,Line, ResponsiveContainer } from 'recharts';
 


const Chartexample = () =>{
const data1 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  return (
    <div>
    
    <ResponsiveContainer width="100%" height="100%">
       <LineChart date={data1}>
        <Line dataKey="value"/>
       </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chartexample;