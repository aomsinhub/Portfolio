import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis ,ResponsiveContainer} from 'recharts';
const dataRadar = [
    {
      subject: 'Computer',
      A: 90,
    },
    {
      subject: 'Math',
      A: 100,
    },
    {
      subject: 'English',
      A: 70,
    },
    {
      subject: 'Science',
      A: 85,
    },
    {
      subject: 'Thai',
      A: 80,
    },
  ];
const Radarchart = () => {
  return (
    <div>
            <ResponsiveContainer width={700} height={400}>
              <RadarChart cx="40%" cy="50%" outerRadius="80%" data={dataRadar}>
                <PolarGrid stroke='#84878a'/>
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis stroke='#84878a' angle={18} domain={[0, 100]}/>
                <Radar name="skill" dataKey="A" stroke="#8884d8" fill="#58a3e0" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
        </div>
  )
}

export default Radarchart