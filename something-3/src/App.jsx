import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main',
        markers: false,
        start: 'top 0%',
        end: 'top -100%',
        scrub: true,
        pin: true,
      }
    });

    tl.from("#img1",{
      y: "84%",
      opacity: 0,
      duration: 1.4,
      ease: 'power2.in'
    })

    tl.from("#img2",{
      y: "-84%",
      opacity: 0,
      duration: 1.4,
      delay: -1.4,
      ease: 'power2.in'
    })

    document.querySelectorAll("#holder>div").forEach(el => {
      tl.from(el, {
        x: '-100%',
        opacity: 0,
        duration: 1,
        delay: -0.9,
        ease: 'power4.inOut',
      });
    });

  }, { scope: mainRef });

  return (
    <div ref={mainRef}>
      <div className="temp"></div>
      <div className="main">
        <div id="info">
          <div id="holder">
            <div id="content1">
              <h1>Old is gold but new is diamond</h1>
            </div>
            <div id="content2">
              <h3>
                As per time goes on, the cars are developing more and more in
                design and speed. Koenigsegg can go up to 400km/h in 28 seconds.
              </h3>
            </div>
            <div id="content3">
              <h3>Wanna see more?</h3>
              <div id="circ">
                <svg
                  fill="#ffffff"
                  height="20px"
                  width="17px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div id="gallery">
          <div className="img" id="img1">
            <img
              src="https://images.unsplash.com/photo-1732188026835-3ac4b1f2c938?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="img" id="img2">
            <img
              src="https://images.unsplash.com/photo-1690942132239-d66226f5e1f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtvZW5pZ3NlZ2d8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
