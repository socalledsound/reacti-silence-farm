import React, { useRef, useEffect } from 'react';

import './canvas.styles.scss';

const appWindow = document.querySelector('#root');




const Canvas = (props) => {

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.canvas.width = appWindow.clientWidth;
        context.canvas.height = appWindow.clientHeight;

        // const myP5 = new p5(sketch, this.myP5 = new p5(this.Sketch, this.myRef.current)

        context.fillStyle = '#444';
        context.fillRect(0,0, context.canvas.width, context.canvas.height)
    }, [])




    
    return (
        <div className="canvas-container">
            <canvas className='canvas' ref={canvasRef} {...props}></canvas>
        </div>
    )
}

export default Canvas