/* eslint-disable no-unused-vars */
import side from '../Images/ngo2-slider-pic1.png'
import React from 'react'
import './bd.css'
const bodyt = () => {
  return (
    <div id=''>
      <h1>Medical care and <br/>
      education for children</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
      Est ex molestiae omnis nesciunt  veritatis rerum eaque<br/>
       voluptatem distinctio numquam! Quos.</p>
       <div id='btn'>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id='first'>
  Our Foundation
</button>
       <button type="button" className="btn btn-sm" id='second'>Discover Us &rarr;</button>
       </div>
       <div id='hold'><img src={side} width={150}/>
      </div>
    </div>
  )
}

export default bodyt
