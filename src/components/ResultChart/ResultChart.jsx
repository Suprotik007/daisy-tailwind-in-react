import React from 'react';
import { LineChart, Line } from 'recharts';
const ResultChart = () => {
    const students = [
        {
          id: 1,
          name: "Student 1",
          physics: 27,
          chemistry: 21
        },
        {
          id: 2,
          name: "Student 2",
          physics: 22,
          chemistry: 85
        },
        {
          id: 3,
          name: "Student 3",
          physics: 65,
          chemistry: 70
        },
        {
          id: 4,
          name: "Student 4",
          physics: 74,
          chemistry: 49
        },
        {
          id: 5,
          name: "Student 5",
          physics: 22,
          chemistry: 62
        },
        {
          id: 6,
          name: "Student 6",
          physics: 63,
          chemistry: 60
        },
        {
          id: 7,
          name: "Student 7",
          physics: 57,
          chemistry: 96
        },
        {
          id: 8,
          name: "Student 8",
          physics: 8,
          chemistry: 30
        },
        {
          id: 9,
          name: "Student 9",
          physics: 70,
          chemistry: 28
        },
        {
          id: 10,
          name: "Student 10",
          physics: 65,
          chemistry: 97
        }
      ];
      
    //   // Example of accessing the data:
    //   students.forEach(student => {
    //      console.log(`Name: ${student.name}, Physics Marks: ${student.physics}, Chemistry Marks: ${student.chemistry}`);
    //   });
      
    return (
        <div>
            <LineChart width={400} height={400} data={students}>
                {/* <XAxis dataKey="name"></XAxis>/ */}
                {/* <YAxis></YAxis> */}
    <Line type="monotone" dataKey="physics" stroke="yellow" />
    <Line type="monotone" dataKey="chemistry" stroke="blue" />
    
  </LineChart>
        </div>
    );
};

export default ResultChart;