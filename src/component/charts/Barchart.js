import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts';


const dataBar = [
    {
      subject: 'TGAT1',
      Score: 53.333,
    },
    {
      subject: 'TGAT2',
      Score: 67.500,
    },
    {
      subject: 'TGAT3',
      Score: 75.416,
    },
    {
      subject: 'TPAT3',
      Score: 66.000,
    },
  ];
const Barchart = () => {
  return (
    <div>
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
            <BarChart data={dataBar} width={650} height={500}>
                <XAxis dataKey="subject"/>
                <YAxis domain={[0,100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Score" fill='#1C7BEE '/>
            </BarChart>      
        </ResponsiveContainer>
    </div>
    )
}

export default Barchart