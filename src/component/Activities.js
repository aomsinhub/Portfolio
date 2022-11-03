import React, { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'

const Activities = ()=> {
  useEffect (() => {
    Aos.init({duration: 2000 }); 
  }, [])
  return (
    <div>
      <div className='grids'>
        <div className='box' data-aos="zoom-out-up">
          <div className='act-img'></div>
          <div className='act-text'>
            <h1>กิจกรรมประเมินโรงเรียนพระราชทาน</h1>
            <h2>เป็นตัวแทนกล่าวนำเสนอของกลุ่มสาระการเรียนรู้คณิตศาสตร์ ในกลุ่มสาระมีการจัดแสดง เครื่องชงกาแฟอัตโนมัติ ศิลปะการพับกระดาษจากรูปทรงเรขาคณิต</h2>
          </div>
        </div>
        <div className='box' data-aos="zoom-out-up">hello</div>
        <div className='box' data-aos="zoom-out-up">hello</div>
        <div className='box' data-aos="zoom-out-up">hello</div>
      </div>
    </div>
  )
}

export default Activities