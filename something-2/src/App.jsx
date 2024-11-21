import React, { useRef, useState } from "react";
import "./app.css";
import gsap from "gsap";

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
      name: "sahil Patel",
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
    const nextIndex = (currentIndex + 1) % Peoples.length;
    animateTransition(nextIndex);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + Peoples.length) % Peoples.length;
    animateTransition(prevIndex);
    setCurrentIndex(prevIndex);
  };

  const animateTransition = (nextIndex) => {
    imgRefs.current.forEach((img, i) => {
      gsap.to(img, {
        scale: i === nextIndex ? 1.3 : 1,
        duration: 1,
        ease: "power2.inOut",
      });
    });

    gsap.fromTo(
      circleRef.current,
      { scale: 0.5 },
      { scale: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
    );

    gsap.fromTo(
      "#info",
      { opacity: 0 },
      { opacity: 1, duration: 1,scale: 1, ease: "power2.out" }
    );
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
                key={index}
                ref={(el) => (imgRefs.current[index] = el)}
                src={person.image}
                alt={person.name}
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
