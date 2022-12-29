import React from 'react'
import profile from "../pic/profile.jpg"
import replit from "../pic/replit_icon.png"
import vscode from "../pic/vscode_icon.png"
import netbean from "../pic/NetBeans_icon.png"
import flowg from "../pic/flowg_icon.png"
import ps from "../pic/ps_icon.png"
import gpax from "../pic/GPAX5.jpg"
import Barchart from './charts/Barchart.js'
import Circlechart from './charts/Circlechart.js'
import Gpax from './charts/Gradelist.js'
import Radarchart from './charts/Radarchart.js'

const Home = ()=> {
  return (
    <div className="home">
      <div class="row">
        <div class="col-7">
          <div className="bg">
            <div class="row">
              <div class="col-7">
                <div className='hello'>Hello!! I'm AOMSIN</div>
                <div className='profile-text'>
                <h1>สวัสดีครับ ผมชื่อนายเป็นเอก คงกะพันธ์ <br />ชื่อเล่น ออมสิน อายุ 18 ปี<br />ผมมีความสนใจในการเขียนโปรแกรมตั้งแต่ ม.2 
                มันเริ่มต้นมาจากการที่ผมเล่นเกมที่สามารถสร้างสรรค์เนื้อเรื่องการเล่นได้อิสระ โดยมีการเขียนคำสั่งในเกม และลำดับการทำงานว่าจะให้แสดงผลอะไรเมื่อมีผู้เล่นทำตามเงื่อนไข
                ในช่วงขึ้น ม.4 ผมได้เข้าเรียนต่อสาย วิทยาศาสตร์ คณิตศาสตร์ Ai โดยสายการเรียนนี้ได้มีการสอนเขียนโปรแกรม และผมก็ได้เข้าร่วมค่ายกิจกรรมที่เกี่ยวข้อง
                เพื่อพัฒนาความสามารถ ผมมั่นใจว่าสาขาวิทยาการคอมพิวเตอร์ เป็นสายที่เหมาะกับผมอย่างแน่นอนครับ</h1>
                </div>
              </div>
              <div class="col-5"><img src={profile} width="350" height="350" data-was-processed="true" ></img></div>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div className="bg_video">
            <iframe width="628" height="350" src="https://www.youtube.com/embed/DtnNDwUw8Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <div className="bg">
            <h1 class='test-weight-bold'>Programming languages</h1>
            <Circlechart/>
          </div>
        </div>
        <div class="col-4">
          <div className="bg">
            <h1 class='test-weight-bold'>Subjects</h1>
            <Radarchart/>
          </div>
        </div>
        <div class="col-4">
          <div className="bg">
            <h1 class='test-weight-bold'>Education</h1>
            <div className='education'>
            <h2 class='test-weight-bold'>ประถมศึกษา</h2>
            <h3>O-Net คณิตศาสตร์ 100 คะแนน</h3>
            <h3>โรงเรียนไทยรัฐวิทยา 69 คลองหลวง</h3>
            <h2 class='test-weight-bold'>มัธยมต้น</h2>
            <h3>O-Net คณิตศาสตร์ 88 คะแนน</h3>
            <h3>O-Net ภาษาไทย 76 คะแนน</h3>
            <h3>เกรดเฉลี่ย 3.93</h3>
            <h3>โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม</h3>
            <h2 class='test-weight-bold'>มัธยมปลาย</h2>
            <h3>GPAX 4.00</h3>
            <h3>โรงเรียนธรรมศาสตร์คลองหลวงวิทยาคม</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <div className="bg" >
            <div className='gpax'><h1 class='test-weight-bold'>GPAX 5 Term</h1></div>
            <Barchart/>
          </div>
        </div>
        <div class="col-5">
          <div className="bg">
            <div class="row">
              <div class="col-7">
                <Gpax/>
              </div>
              <div class="col-5">
                <a href='https://drive.google.com/file/d/106AFaAHguWRXfOhqRXVDUZLnIIx6CqIU/view?usp=sharing' target='_blank'><img src={gpax} width="100%" data-was-processed="true" ></img></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <div className="bg-2">
            <h1 class='test-weight-bold'>Skills & Programs</h1>
              <div class="row">
                <div class="col-2"></div>
                <div class="col-4">
                  <div class="row">
                    <div class="col-2"><img src={vscode} width="55" height="55" data-was-processed="true" ></img></div>
                    <div class="col-10"><h2>Visual studio code</h2></div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="row">
                    <div class="col-3"><img src={netbean} width="55" height="55" data-was-processed="true" ></img></div>
                    <div class="col-9"><h2>NetBeans</h2></div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="row">
                    <div class="col-2"><img src={replit} width="55" height="55" data-was-processed="true" ></img></div>
                    <div class="col-10"><h2>Replit</h2></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3"></div>
                <div class="col-3">
                  <div class="row">
                    <div class="col-3"><img src={flowg} width="55" height="55" data-was-processed="true" ></img></div>
                    <div class="col-9"><h2>Flowgorithm</h2></div>
                  </div>
                </div>
                <div class="col-3">
                  <div class="row">
                  <div class="col-3"><img src={ps} width="55" height="55" data-was-processed="true" ></img></div>
                    <div class="col-9"><h2>Photoshop</h2></div>
                  </div>
                </div>
                <div class="col-3"></div>
              </div>
          </div>
        </div>
        <div class="col-4">
          <div className="bg">
            <h1 class='test-weight-bold'>Contact me</h1>
            <h3 class='test-weight-bold'>Line : 11111oom</h3>
            <h3 class='test-weight-bold'>Facebook : <a href='https://www.facebook.com/profile.php?id=100006307038577' target='_blank'>Aomsin Penek</a></h3>
            <h3 class='test-weight-bold'>Gmail : 2547oom@gmail.com</h3>
            <h3 class='test-weight-bold'>Tel. : 096-504-2505</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home