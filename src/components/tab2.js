import React, { useRef, useEffect } from 'react';
import Image from "../images/paper.png";
import { TweenMax, Power3, TimelineLite, TweenLite,Back} from "gsap";
import './main.css';
const Tab2 = () => {
    const text = useRef(null)
    const marquee = useRef(null)
    const revMarquee = useRef(null)
    const planeImg = useRef(null)
    const planeDiv = useRef(null)
    useEffect(() => {
    
        TweenMax.to(
            text.current,
            3,
            {
                opacity: 1,
                y: -40,
                x: -20,
                ease: Power3.easeOut
            },
        )
        TweenMax.to(
            marquee.current,
            10,
            {
                opacity: 1,
                x: window.innerWidth

            }
        )
        TweenMax.to(
            revMarquee.current,
            6,
            {
                opacity: 1,
                x: window.innerWidth,
                y: 300,
                rotate: 110,
                ease: Power3.easeOut,
                delay: 6
            }
        )
      
      TweenLite.to(planeImg.current,10, {
            opacity:1,
            x: window.innerWidth,
            y:150,
            rotate: -60,
            ease:Back.easeOut,
            delay: 3,
            
        })
         
    }, [])
    return (
        <div className="cont ani">
            <div className="top">
                <h1 ref={marquee}> Hello  MUJ    This   Animation    Is    Made    Using   GSAP.</h1>
                <h2 ref={revMarquee}>Bye Bye</h2>
                <img src={Image} ref={planeImg} className="plane-img" />
            </div>
            <div className="plane" ref={planeDiv}>
                
            </div>


        </div>

    )
}

export default Tab2;