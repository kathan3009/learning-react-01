import React,{useRef,useEffect} from  'react';
import { TweenMax,Power3} from "gsap";
import './main.css';
const Tab2 = () => {
   const text = useRef(null)
   const marquee = useRef(null)
   const revMarquee = useRef(null)

   useEffect(() => {
    TweenMax.to(
        text.current,
        3,
        {
            opacity:1,
            y:-40,
            x:-20,
            ease:Power3.easeOut
        },
       
    )
    TweenMax.to(
        marquee.current,
        10,
        {
            opacity:1,
            x:window.innerWidth

        }
    )
    TweenMax.to(
        revMarquee.current,
        6,
        {
            opacity:1,
            x:window.innerWidth,
            y:window.innerHeight,
            rotate:110,
            delay:6
        }
    )
   },[])
      return (
          <div className="cont ani">
              <h1 ref={marquee}> Hello  MUJ    This   Animation    Is    Made    Using   GSAP.</h1>  
              <h2 ref={revMarquee}>Bye Bye</h2>
          </div>
         
      )
}

export default Tab2;