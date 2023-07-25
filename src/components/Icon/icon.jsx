/* eslint-disable no-unused-vars */
import React from 'react'
import ng1 from '../Images/ngo2-about-icon1.png'
import ng2 from '../Images/ngo2-about-icon2.png'
import ng3 from '../Images/ngo2-about-icon3.png'
import ng4 from '../Images/ngo2-about-icon4.png'
import './icon.css'
const icon = () => {
  return (
    <div id='ico'>
     <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      className=""
    >
      <img src={ng1}/>
    <h3>Healthy Food</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque omnis cupiditate aut</p>
    </div>
    <div
      className=""
    >
      <img src={ng2}/>
    <h3>Education</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque omnis cupiditate aut</p>
    </div>
    <div
      className=""
    >
      <img src={ng3}/>
    <h3>Pure Water</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque omnis cupiditate aut</p>
    </div>
    <div
      className=""
    >
      <img src={ng4}/>
    <h3>Medical Care</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque omnis cupiditate aut</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default icon
