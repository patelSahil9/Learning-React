import React, { useRef, useState, useEffect } from "react";
import "./app.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

export default function App() {
  const imgRefs = useRef([]);
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

  useEffect(() => {
    gsap.fromTo(
      imgRefs.current[currentIndex],
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.inout" }
    )
    gsap.to(imgRefs.current[currentIndex], {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.inout",
      onComplete: () => {
        gsap.to(imgRefs.current[currentIndex], {
          scale: 1.3,
          duration: 1,
          ease: "power2.inout",
        });

      },

    });
    gsap.fromTo(
      circleRef.current,
      { scale: 0.5 },
      { scale: 0.8,
         duration: 2,
          ease: "elastic.out(0.8 , 0.3)" }
    );

  }, [currentIndex]);


  const handleNext = () => {
    gsap.from(
      "#image",
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }
    );
    gsap.to(
      "#image",
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }
      );
      
      gsap.from(
        "#info",
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
      gsap.to(
        "#info",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
        );
    const nextIndex = (currentIndex + 1) % Peoples.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    gsap.from(
      "#image",
      {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      }
    );
    gsap.to(
      "#image",
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      }
      );
      gsap.from(
        "#info",
        {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        }
      );
      gsap.to(
        "#info",
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
        );
    const prevIndex = (currentIndex - 1 + Peoples.length) % Peoples.length;
    setCurrentIndex(prevIndex);
  };
  return (
    <div id="main">
      <div id="left-btn" onClick={handlePrev}>
        {"<"}
      </div>

      <div id="gallery">
        <div id="circle" ref={circleRef}></div>
        <div id="image">
          <div id="sub_img">
            {Peoples.map((person, index) => (
              <img
                key={person.name}
                ref={(el) => (imgRefs.current[index] = el)}
                src={person.image}
                alt={person.name}
                style={{
                  display: index === currentIndex ? "block" : "none",
                }}
              />
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
