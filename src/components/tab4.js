import React , {useRef,useEffect}from  'react';
import Webcam from "react-webcam";
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import { drawNose,drawEyes} from "./extras";
import './main.css';

const Tab4 = () => {
     const videoRef = useRef(null);
     const canvasRef = useRef(null)
     
     const poseDetect = async () =>{
         const net = await posenet.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: { width: 640, height: 480 },
            multiplier: 0.5,
            quantBytes: 2
          })
         setInterval(() => {
             videoDetect(net)
         },100)
     } 
     
     const videoDetect = async (net) => {
         if( typeof videoRef.current !== "undefined" && videoRef.current !== null && videoRef.current.video.readyState === 4)
         {
              const video = videoRef.current.video;
              const videoWidth = videoRef.current.video.videoWidth;
              const videoHeight = videoRef.current.video.videoHeight;

              videoRef.current.video.width = videoWidth
              videoRef.current.video.height = videoHeight

              const pose = await net.estimateSinglePose(video);
              console.log(pose)
              drawPoints(pose, videoWidth, videoHeight);
         }
     }
     const drawPoints = async (pose, videoWidth, videoHeight) => {
         const ctx = canvasRef.current.getContext('2d')
         canvasRef.current.width = videoWidth;
         canvasRef.current.height = videoHeight;
         drawNose(pose["keypoints"],ctx)
         drawEyes(pose["keypoints"], ctx)
     }
     poseDetect()
      return (
         <div className="pose">
                      <Webcam className="webVideo" ref={videoRef}/>
                      <canvas className="webCanvas" ref={canvasRef}/>
         </div>
      )
}

export default Tab4;