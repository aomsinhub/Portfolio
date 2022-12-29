import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';


const dataBar = [
    {
      subject: 'Computer',
      grade: 4.0,
    },
    {
      subject: 'Math',
      grade: 4.0,
    },
    {
      subject: 'English',
      grade: 4.0,
    },
    {
      subject: 'Science',
      grade: 4.0,
    },
    {
      subject: 'Thai',
      grade: 4.0,
    },
  ];
const Barchart = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <BarChart data={dataBar} width={650} height={500}>
                <XAxis dataKey="subject"/>
                <YAxis domain={[0,4]} />
                <Legend />
                <Bar dataKey="grade" fill='#1C7BEE '/>
            </BarChart>      
        </ResponsiveContainer>
    </div>
    )
}

export default Barchart