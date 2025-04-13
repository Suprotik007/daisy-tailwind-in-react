import React ,{use}from 'react';

const MarksChart = ({marksData}) => {
    const marksDataRes=use(marksData);
    const markData=marksDataRes.marksData;


const marksChartData=markData.map(studentData=>{

    const student={
        id:studentData.id,
        name:studentData.name,
        physics:studentData.subjects.physics,
        chemistry:studentData.subjects.chemistry,
        math:studentData.subjects.math,

    }
    return student
})
    console.log(marksChartData);
    
    return (
        <div>
            
            
        </div>
    );
};

export default MarksChart;