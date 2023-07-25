/* eslint-disable no-unused-vars */
import React from 'react'
import './found.css'
import home from '../Images/ngo2-home-pic1.jpg'
const found = () => {
  return (
<div className="max-w-[1320px] md:py-[80] py-5 flex mx-auto md:flex-row flex-col" id='flad'>
    <div className='basis-[45%]'><img src={home} width={520}/></div>
    <div className='basis-[55%] px-5'>
    <h1>About our
         foundation</h1>
         <h3>Duis dignissim mi ut laoreet mollis. Nunc<br/>
          id tellus finibus, eleifend mi vel, maximus<br/>
          justo. Maecenas mi tortor, pellentesque a<br/>
           aliquam ut, fringilla eleifend lectus.</h3>

          <p>Maecenas ultrices tellus sit amet sem<br/>
           placerat tempor. Maecenas eget arcu <br/>
           venenatis, sagittis felis sit amet, dictum nisl.<br/>
            Orci varius natoque penatibus et magnis dis<br/>
             parturient montes, nascetur ridiculus mus.<br/>
           Phasellus vitae vulputate elit</p>
           <br/>
           <p>Mauris rhoncus orci in imperdiet placerat.<br/>
            Vestibulum euismod nisl suscipit ligula<br/>
             volutpat, a feugiat urna maximus.</p>

             <div id='btn3'>
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" id='first'>
  Donate Now
</button>
&nbsp; &nbsp;
       <button type="button" className="btn btn-sm" id='second'>About Us &rarr;</button>
       </div>
    </div>
</div>
    
  )
}

export default found
