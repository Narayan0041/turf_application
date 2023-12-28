import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 8,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
        {value.split(' ')[1]}
      </text>
    </g>
  );
};

export default class UserComeInDayWiseGraph extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-min-height-3ilfq';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />
          </Bar>
          <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}




























// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts';
// import { dataset } from './UserBookingData';
// // import "./Style.css"


// const chartSetting = {
//   yAxis: [
//     {
//       label: 'Booking Slot',
//       sx: {
//         [`.${axisClasses.left} .${axisClasses.label}`]: {
//           color: 'red', // Change color to red (example)
         
//         },
//       }
//     },
    
//   ],
//   width: 370,
//   height: 300,
//   sx: {
//     [`.${axisClasses.left} .${axisClasses.label}`]: {
//       transform: 'translate(-10px, 0)',
//     },
//     // [`.${axisClasses.bottom} .${axisClasses.label}`]: {
//     //   // Add custom styles for X axis labels here
//     //   color: 'blue', // Change color to blue (example)
//     //   // Add other styles as needed
//     // },
//   },
// };

// const valueFormatter = (value) => `${value}`; 
// export default function UserComeInDayWiseGraph() {
//   return (
//     <div className='UserBookingDataGraphSection'>
//       <BarChart 
//         dataset={dataset}
//         xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
//         series={[
//           { dataKey: 'firstSlot', label: 'First Slot', valueFormatter },
//           { dataKey: 'secondSlot', label: 'Second Slot', valueFormatter },
//           { dataKey: 'thirdSlot', label: 'Third Slot', valueFormatter },
//         ]}
//         {...chartSetting}
       
//       />
//     </div>
//   );
// }
