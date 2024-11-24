import React from 'react'
// import arrow from './arrow.png'
import './App.css'

export default function App() {
  return (
    <div>

      <div className="temp">

      </div>
      <div className="main">
        <div id="info">
          <div id="holder">
            <div id="content1">
              <h1>Old is gold but new is diamond</h1>
            </div>
            <div id="content2">
              <h3>as per time goes on the cars are developing more and more in design and speed koneigsseg can go upto 400km/h in 28s. </h3>
            </div>
            <div id="content3">
              <h4>wanna see more<img src=' https://imgs.search.brave.com/oWdOqTA6on2bPzp0L1WbXkwby8N7EymGH2Glj_0PZJc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2Fycm93LXBu/Zy1uby1iYWNrZ3Jv/dW5kLXJpZ2h0LWFy/cm93LXRyYW5zcGFy/ZW50LWJhY2tncm91/bmQtcG5nLTQxOS5w/bmc' alt="arrow" /> </h4>
              
            </div>
          </div>
        </div>
        <div id="gallery">
          <div className="img" id="img1" style={{}}>
            <img src="https://images.unsplash.com/photo-1732188026835-3ac4b1f2c938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="img" id="img2" style={{}}>
            <img src="https://images.unsplash.com/photo-1690942132239-d66226f5e1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtvZW5pZ3NlZ2d8ZW58MHx8MHx8fDA%3D" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}