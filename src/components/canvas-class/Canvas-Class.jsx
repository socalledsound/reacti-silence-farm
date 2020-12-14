import React from 'react';
import p5 from 'p5';

class CanvasClass extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
    
        let count = 0; 
        let img;
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

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
      }

    render(){
        return (
            <div ref={this.myRef}>

            </div>
        )
    }  
}

export default CanvasClass