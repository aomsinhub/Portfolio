import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts';

const data = [
    { name: 'Group A', value: 35, detail: "Python" },
    { name: 'Group B', value: 35, detail: "Java" },
    { name: 'Group C', value: 15, detail: "Html" },
    { name: 'Group D', value: 15, detail: "Css" },
  ];

  const COLORS = ["#FFBB2B","#2089F3","#E97419", "#2CADFB"]
// const DETAIL

const renderLabel = function (entry) {
  return entry.detail;
}

const CirclechartProgramming = () => {
  return (
    <div style={{ width: '100%', height: 400 }}>
    <ResponsiveContainer >
      <PieChart>
        <Pie dataKey="value" data={data} fill="#8884d8" label={renderLabel} >
          {data.map((entry, index) => (


            <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            />

            ))}
       </Pie>
     </PieChart>
    </ResponsiveContainer>
    </div>
    
  )
}

export default CirclechartProgramming