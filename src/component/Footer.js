import React from 'react'
import faceicon from "../pic/facebook_icon.png"
import giticon from "../pic/github_icon.png"

const Footer = ()=> {
  return (
    <div className='Footer-container'>
        <ul className='Contact'>
          <li>
            <h1>contact me</h1>
          </li>
          <li>
            <a href='https://www.facebook.com/profile.php?id=100006307038577' target='_blank'><img src={faceicon} ></img></a>
          </li>
          <li>
            <a href='https://github.com/aomsinhub' target='_blank'><img src={giticon} ></img></a>
          </li>
        </ul>
    </div>
  )
}

export default Footer