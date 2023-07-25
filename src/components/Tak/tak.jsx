/* eslint-disable no-unused-vars */
import React from 'react'
import './tak.css'
import lo from '../Images/ngo2-home-pic5.jpg'
import c1 from '../Images/ngo2-whatwedo-icon1.png'
import c2 from '../Images/ngo2-whatwedo-icon2.png'
import c3 from '../Images/ngo2-whatwedo-icon3.png'
import c4 from  '../Images/ngo2-whatwedo-icon4.png'
const tak = () => {
  return (
    <div className='max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col'>
      <div className='basis-[45%]'>
        <div><h3>
    Ajeeb Charity in numbers
        </h3>
        <p id='cf'>Aliquam ac dui vel dui vulputate consectetur. Mauris accumsan,<br/>
         massa non consectetur condimentum diam.</p>
         <div>
         <div className="grid grid-cols-4 gap-4">
  <div>
    <img src={c1} width={70}/>
    <span className="dot">
            <h2>1600kg</h2>
        </span>
        <p>Vivamus in diam turpis<br/>
        maximus tristique</p>
  </div>
  <div>
    <img src={c2} width={70}/>
  </div>
  <div>
    <img src={c3} width={70}/>
  </div>
  <div>
    <img src={c4} width={70}/>
  </div>
</div>
         </div>
      </div>
      </div>
      <div className='basis-[55%] px-5'><img src={lo} width={490}/></div>
    </div>
  )
}

export default tak
