/* eslint-disable no-unused-vars */
import React from 'react'
import './story.css'
import m1 from '../Images/ngo2-home-pic2-780x675.jpg'
import m2 from '../Images/ngo2-home-pic3-780x675.jpg'
import m3 from '../Images/ngo2-home-pic4-780x675.jpg'
import m4 from '../Images/ngo2-home-pic6-780x675.jpg'
const story = () => {
  return (
    <div id='bg2'>
        <h3>Our Succcess Stories</h3>
        <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div
      className=""
    >
      <img src={m1} width={250}/>
      <p>April 15, 2022</p>
      <h4>Aasirs story</h4>
    </div>
    <div
      className=""
    >
      <img src={m2} width={250}/>
      <p>September 15, 2019</p>
      <h4>Lubanzis story</h4>
    </div>
    <div
      className=""
    >
      <img src={m3} width={250}/>
      <p>July 9, 2012</p>
      <h4>Sumaiyas story</h4>
    </div>
    <div
      className=""
    >
      <img src={m4} width={250}/>
      <p>June 19, 2012</p>
      <h4>Kelvins story</h4>
    </div>
  </div>
</div>
    </div>
  )
}

export default story
