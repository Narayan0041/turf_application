import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { dataset } from './UserBookingData';
// import "./Style.css"


const chartSetting = {
  yAxis: [
    {
      label: 'Booking Slot',
      sx: {
        [`.${axisClasses.left} .${axisClasses.label}`]: {
          color: 'red', // Change color to red (example)
         
        },
      }
    },
    
  ],
  width: 370,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-10px, 0)',
    },
    // [`.${axisClasses.bottom} .${axisClasses.label}`]: {
    //   // Add custom styles for X axis labels here
    //   color: 'blue', // Change color to blue (example)
    //   // Add other styles as needed
    // },
  },
};

const valueFormatter = (value) => `${value}`; 
export default function UserComeInDayWiseGraph() {
  return (
    <div className='UserBookingDataGraphSection'>
      <BarChart 
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
        series={[
          { dataKey: 'firstSlot', label: 'First Slot', valueFormatter },
          { dataKey: 'secondSlot', label: 'Second Slot', valueFormatter },
          { dataKey: 'thirdSlot', label: 'Third Slot', valueFormatter },
        ]}
        {...chartSetting}
       
      />
    </div>
  );
}
