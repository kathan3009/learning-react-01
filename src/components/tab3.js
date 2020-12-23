import React,{useEffect,useRef} from 'react';
import './main.css';
const Tab3 = () => {
    const canvasRef = useRef(null)
  
 useEffect(() => {
     console.log(canvasRef)
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var x =0;
    var y=0;
    var a = parseInt( prompt('Enter number of vertices'))   
    var arr = drawPolygon(ctx,a)
    drawPoint(x,y,ctx)
    if(arr)      
    { 
     for(var i=0;i<50000;i++)
     {
       
      setTimeout( () => {    
       const rand = Math.floor( (Math.random()*a))            
        x = (x+arr[0][rand])/2 
        y = (y +arr[1][rand])/2
        drawPoint(x,y,ctx);
      },100)                           
       
    }
   
    }
 },[])
 function drawPoint(x,y,ctx){
     //point 
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, Math.PI*2, true);   
    ctx.closePath();
    ctx.fillStyle = "#ffffff";
    ctx.fill();
 }
 function drawPolygon(ctx,a){

     const angle  = (2*Math.PI)/a;     
     const radius = 200;                  
     var arrX=[]                        
     var arrY=[]
     var cenX = window.innerWidth/2
     var cenY = window.innerHeight/2
     if(a)
     {
        ctx.beginPath()
        ctx.translate(cenX,cenY);
        ctx.moveTo(radius,0);
        arrX[0] = radius
        arrY[0] = 0
        for (var i = 1; i < a; i++) {
          arrX[i]=   radius*Math.cos(angle*i)                  
          arrY[i]=  radius*Math.sin(angle*i)
          ctx.lineTo(radius*Math.cos(angle*i),radius*Math.sin(angle*i));
        }
        ctx.closePath();
        ctx.lineWidth = 6;
        ctx.stroke();
   
     }
     return [arrX,arrY]                
 }
    return (
        <div className="cont">
            
            <div className="inside">
                  <canvas ref={canvasRef}></canvas>
            </div>
              
           
        </div>
    )
}

export default Tab3;