import React, { useEffect } from 'react'
import Lenis from 'lenis'
import "./gallerycss.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

function GallerySection() {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
    console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  })

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach(elem =>{
    let image = elem.querySelector("img");
    let xTransform = gsap.utils.random(-100, 100);
    let tl= gsap.timeline();
      
    tl.set(image,{
      // The transform origin is the point around which a transformation is applied.
      transformOrigin:`${xTransform < 0 ? 0 : '100%'}`
    },"start")

    .to(image,{
      scale: 0,
      ease:"none",
      scrollTrigger:{
        trigger:image,
        start:"top top",
        end:"bottom top",
        scrub:true,
        // pin:true
      }
    },"start")

    .to(elem,{
      xPercent:xTransform,
      ease: "none",
      scrollTrigger:{
          trigger:image,
          start:"top bottom",
          end:"bottom top",
          scrub:true,
          // pin:true
        }
      })

    })
  })

  useEffect(() => {
    // Function to split the text and wrap it in span tags
    function breakTheText() {
      let h1 = document.querySelector('.h1');
      let h1text = h1.textContent;
      let splittedText = h1text.split('');

      let halfVal = Math.floor(splittedText.length / 2);
      let clutter = '';

      splittedText.forEach((elem, idx) => {
        if (idx < halfVal) {
          clutter += `<span class="a">${elem}</span>`;
        } else {
          clutter += `<span class="b">${elem}</span>`;
        }
      });

      h1.innerHTML = clutter;
    }

    // GSAP ScrollTrigger to call breakTheText when the section enters the viewport
    ScrollTrigger.create({
      trigger: '.gallery-section', // This should be the container of your gallery section
      start: 'top 80%', // When the top of the section reaches 80% from the top of the viewport
      onEnter: () => {
        breakTheText();
        gsap.from('h1 .a', {
          y: 80,
          duration: 1,
          delay: 0.2,
          opacity: 0,
          stagger: 0.15,
        });
        gsap.from('h1 .b', {
          y: 80,
          duration: 0.3,
          delay: 0.5,
          opacity: 0,
          stagger: -0.15,
        });
      }
    });
  }, []);


  return (
    <div className="bg-black -z-[10] relative gallery-section my-0">
        <div className="grid grid-cols-8 grid-rows-20 gap-2">
            <div className="elem col-span-1 row-span-1 " style={{"--r":  1 ,  "--c":  3}}><img src="../src/assets/img1.jpeg" alt="Image1"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  1 ,  "--c":  7}}><img src="../src/assets/img2.jpeg" alt="Image2"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  2 ,  "--c":  2}}><img src="../src/assets/img3.jpeg" alt="Image3"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  2 ,  "--c":  6}}><img src="../src/assets/img4.jpeg" alt="Image4"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  3 ,  "--c":  4}}><img src="../src/assets/img5.jpeg" alt="Image5"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  3 ,  "--c":  8}}><img src="../src/assets/img6.jpeg" alt="Image6"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  4 ,  "--c":  4}}><img src="../src/assets/img7.jpeg" alt="Image7"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  4 ,  "--c":  2}}><img src="../src/assets/img8.jpeg" alt="Image8"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  5 ,  "--c":  6}}><img src="../src/assets/img9.jpeg" alt="Image9"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  5 ,  "--c":  3}}><img src="../src/assets/img10.jpeg" alt="Image10"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  6 ,  "--c":  7}}><img src="../src/assets/img11.jpeg" alt="Image11"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  6 ,  "--c":  5}}><img src="../src/assets/img12.jpeg" alt="Image12"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  7 ,  "--c":  8}}><img src="../src/assets/img13.jpeg" alt="Image13"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  7 ,  "--c":  1}}><img src="../src/assets/img14.jpeg" alt="Image14"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  8 ,  "--c":  4}}><img src="../src/assets/img15.jpeg" alt="Image15"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  8 ,  "--c":  2}}><img src="../src/assets/img16.jpeg" alt="Image16"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  9 ,  "--c":  6}}><img src="../src/assets/img17.jpeg" alt="Image17"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  9 ,  "--c":  5}}><img src="../src/assets/img18.jpeg" alt="Image18"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  10 ,  "--c":  3}}><img src="../src/assets/img19.jpeg" alt="Image19"/></div>
            <div className="elem col-span-1 row-span-1 " style={{"--r":  10 ,  "--c":  7}}><img src="../src/assets/img20.jpeg" alt="Image20"/></div>
        </div>

        <div className="fixed top-0 w-full h-full flex flex-col items-center justify-center text-white">
            <h1 className="h1 text-8xl font-[pricedown]">TAKE A LOOK</h1>
        </div>
    </div>
  )
}

export default GallerySection