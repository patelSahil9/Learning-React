import react from 'react';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

function App() {
  const Parent = react.useRef();

  useGSAP(() => {
    const tl = gsap.timeline({delay: 1});

    tl.from("#main", {
      width: 0,
      duration: 1.4,
      ease:'power4.in',
    })
    tl.from("#box>img", {
      scale: 1.3,
      duration: 1.4,
      delay: -1.6,
      ease:'power2.inOut'
    })

  },{scope:Parent});

  return (
    <div ref={Parent}>
      <div id="main">
        <div id="box">
          <img src="https://images.unsplash.com/photo-1646650925851-5a495a04d2bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </div>
  );
}

export default App;
