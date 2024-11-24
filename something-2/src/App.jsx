import React, { useRef, useState} from "react";
import "./app.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

export default function App() {
  const imgRefs = useRef();
  const circleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const Peoples = [
    {
      name: "Mark Jacobs",
      title: "Creative Director, VISA",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
      quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
    },
    {
      name: "Sahil Patel",
      title: "Tech Lead, Google",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "The rebranding has really helped our business. Definitely worth the investment.",
    },
    {
      name: "Lisa Bearings",
      title: "Brand Coordinator, Facebook",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
    },
  ];

  
  const handleNext = () => {

    let firstChild = imgRefs.current.firstElementChild;
    firstChild.style.minWidth = '0%'; 

    setTimeout(() => {
      imgRefs.current.removeChild(firstChild);  
      imgRefs.current.appendChild(firstChild);
      firstChild.style.minWidth = '100%';
    },1000)

      gsap.fromTo(
        circleRef.current,
        { scale: 0.5 },
        { scale: 1, duration: 2, ease: "elastic.out(0.8 , 0.3)" }
      );
       
      gsap.from("#info",{
         x:100,
         opacity: 0, 
         duration: 1, 
         ease: "power2.out" 
        });


    setCurrentIndex((prev) => (prev + 1) % Peoples.length);
  };

  const handlePrev = () => {
    
    let lastChild = imgRefs.current.lastElementChild;
    lastChild.style.minWidth = '0%';
    imgRefs.current.removeChild(lastChild);
    imgRefs.current.insertBefore(lastChild, imgRefs.current.firstElementChild);
    
    setTimeout(() => {
      lastChild.style.minWidth = '100%';
    },1)

    gsap.fromTo(
      circleRef.current,
      { scale: 0.5 },
      { scale: 1, duration: 2, ease: "elastic.out(0.8 , 0.3)" }
    );
     
    gsap.from("#info",{
       x:-100,
       opacity: 0, 
       duration: 1, 
       ease: "power2.out" 
      });

    setCurrentIndex((prev)=>(prev-1+Peoples.length)%Peoples.length);
  };
  return (
    <div id="main">
      <div id="left-btn" onClick={handlePrev}>
        {"<"}
      </div>

      <div id="gallery">
        <div id="circle" ref={circleRef}></div>
        <div id="image">
          <div id="sub_img" ref={imgRefs}>
            {Peoples.map((person, index) => (
              <div key={index} id={'img${index}'} >
                <img src={person.image} alt="" />
              </div> 
            ))}
          </div>
        </div>
      </div>

      <div id="info">
        <div id="quote">{Peoples[currentIndex].quote}</div>
        <div id="name">{Peoples[currentIndex].name}</div>
        <div id="title">{Peoples[currentIndex].title}</div>
      </div>

      <div id="right-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
