import React, {useEffect, useRef} from 'react';
import p5 from 'p5';

const appWindow = document.querySelector('#root');

const sketch = (p) => {
    let count = 0; 
    let img, sound;
    p.preload = () => {
        img = p.loadImage('logo.jpg');
        
    }


    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.background(220,0,0);
        p.noStroke();
    }
    p.draw = () => {
        p.background(0);
        p.fill(255);
        p.ellipse(200 + count, 200, 100);

        p.rotateX(count/100);
        p.texture(img);
        p.sphere();
        count++
    }
}


const Canvasp5hook = (props) => {

    const containerRef = useRef(null);

    useEffect(()=> {
        const myP5 = new p5(sketch, containerRef.current);
    }, [])


    return (
        <div className="canvas-container" ref={containerRef}>
           
        </div>
    )
    
}
export default Canvasp5hook