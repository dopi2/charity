/* eslint-disable no-unused-vars */
import React from 'react'
import './body.css'
import Navbar from '../Navbar/navbar'
import Icon from '../Icon/icon'
import Bodyt from '../Bodytext/bodyt'
import Found from '../Found/found'
import Story from '../Story/story'
import Tak from '../Tak/tak'
const body = () => {
  return (
    <div>
      <div id='bg'>
        <Navbar/>
        <Bodyt/>
      </div>
      <div>
        <Icon/>
    <Found/>
    <Story/>
    <Tak/>
      </div>
    </div>
  )
}

export default body
