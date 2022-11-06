import React, { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
import actpig1 from "../pic/math_ac.jpg"
import actpig2 from "../pic/scith_ac.jpg"
import actpig3 from "../pic/3_ac.png"
import actpig4 from "../pic/4_ac.png"
import actpig5 from "../pic/tobe_ac.jpg"
import actpig6 from "../pic/6_ac.png"

const Activities = ()=> {
  useEffect (() => {
    Aos.init({duration: 2000 }); 
  }, [])
  return (
    <div>
      <div className='grids'>
        <div className='box'>
          <div className='act-imgset'>
            <div className='act-img1'><img src={actpig1} ></img></div>
          </div>
          <div className='act-text'>
            <h1>การประเมินโรงเรียนพระราชทาน</h1>
            <h3>เป็นตัวแทนกล่าวนำเสนอของกลุ่มสาระการเรียนรู้คณิตศาสตร์ ในกลุ่มสาระมีการจัดแสดง เครื่องชงกาแฟอัตโนมัติ ศิลปะการพับกระดาษจากรูปทรงเรขาคณิต</h3>
          </div>
        </div>
        <div className='box' >
        <div className='act-imgset'>
            <div className='act-img2'><img src={actpig2} ></img></div>
          </div>
          <div className='act-text'>
            <h1>กิจกรรมวิจิตรทางภาษาวิทยศาสตร์ก้าวหน้านำพาเทคโนโลยี</h1>
            <h3>ได้เข้าร่วมกิจกรรมและได้รับรางวัลชนะเลิศการแข่งขันแนวคิดนวัตกรรมและเข้าร่วมกิจกรรม</h3>
          </div>
        </div>
        <div className='box' ><div className='act-imgset'>
            <div className='act-img3'><img src={actpig3} ></img></div>
          </div>
          <div className='act-text'>
            <h1>กิจกรรมจำลองศาสนพิธีมงคล</h1>
            <h3>เป็นกิจกรรมที่ทำพิธีจำลองทางศาสนาอุปสมบท โดยมีหน้าที่นำดำเนินงานกำกับการซ้อมลำดับพิธีและประสานงานทั้งหมด</h3>
          </div></div>
        <div className='box' ><div className='act-imgset'>
            <div className='act-img4'><img src={actpig4} ></img></div>
          </div>
          <div className='act-text'>
            <h1>งาน LIFELONG LEARNING</h1>
            <h3>มีกิจกรรม Robots in Manufacturing,Designing your personality,3D modeling in production design,AI Virtual Assiatant เป็นต้น</h3>
          </div></div>
          <div className='box' ><div className='act-imgset'>
            <div className='act-img5'><img src={actpig5} ></img></div>
          </div>
          <div className='act-text'>
            <h1>TO BE NUMBER ONE ครบรอบ 18 ปี</h1>
            <h3>เข้าร่วมงาน ครบรอบ 18 ปี มหกรรมรวมพลสมาชิกTO BE NUMBER ONE ประจำปี 2563 ต้นแบบระดับเงินและระดับทอง</h3>
          </div></div>
          <div className='box' ><div className='act-imgset'>
            <div className='act-img6'><img src={actpig6} ></img></div>
          </div>
          <div className='act-text'>
            <h1>KHOW ME MORE</h1>
            <h3>เข้าร่วมกิจกรรมนิทรรศการของมหาลัยศรีนครินทรวิโรฒในงานมีการนำเสนอคณะต่างๆในมหาวิทยาลัย</h3>
          </div></div>
      </div>
    </div>
  )
}

export default Activities