import React from 'react';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import { connect } from 'react-redux';


class Canvas extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            // top: 198,
            // left: 320,
            color: `rgba(${0}, ${0}, ${0}, ${0})`,
            minWidth: '611px',
            minHeight: '480px',
        };
    }


    // undo(){
    //     console.log('here')
    // }

    // pass down props to CanvasDraw


    render() {
        return (
            <div>
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                // need to access 

                    style={{
                        position: 'relative',
                        background: 'rgb(255, 255, 255, 0)',
                        display: 'inline-block',
                        margin: 0,

                    }}
                    brushColor={this.props.color}
                    canvasWidth={this.state.minWidth}
                    canvasHeight={this.state.minHeight}
                />
                {/* <button
                    onClick={() => {
                        localStorage.setItem(
                            "savedDrawing",
                            this.saveableCanvas.getSaveData()
                        );
                    }}
                >
                    Save
          </button>
                <button
                    onClick={() => {
                        this.saveableCanvas.clear();
                    }}
                >
                    Clear
          </button> */}




                {/* <button
                    onClick={() => {
                        console.log('this.saveableCanvas', this.saveableCanvas);
                        console.log('this.saveableCanvas.startDrawIdx', this.saveableCanvas.startDrawIdx)
                        // this.setState({saveableCanavas: this.saveableCanvas})
                        //above not quite sure maybe follow redux/canvas tutoriall..

                        if (this.saveableCanvas.startDrawIdx.length > 0) {
                            console.log('this.saveableCanvas.linesArray 2', this.saveableCanvas.linesArray)
                            console.log('this.saveableCanvas.startDrawIdx 2', this.saveableCanvas.startDrawIdx);
                          this.saveableCanvas.linesArray.splice(
                            this.saveableCanvas.startDrawIdx.pop()
                          )};
                          console.log('this.saveableCanvas.linesArray 3', this.saveableCanvas.linesArray)
                            console.log('this.saveableCanvas.startDrawIdx 3', this.saveableCanvas.startDrawIdx);


                            
                        // this.saveableCanvas.undo();
                        // console.log('this.saveableCanavas 1', this.saveableCanvas);

                        //log above has an empty linesArray
                        // need to use props/ref...to link to CanvasDraw?
                        // also maybe not rerendering??
                        // this.saveableCanvas.undo()
                        // this.saveableCanvas.getWrappedInstance() // undo of undefined
                        // console.log('this.saveableCanavas 2', this.saveableCanvas);
                        // this.saveableCanvas.linesArray.length = 0;
                        // console.log('this.saveableCanavas 3', this.saveableCanvas);
                        // this.setState(this.state);
                        // console.log('this.saveableCanvas.ctx', this.saveableCanvas.ctx)
                        

                        
                        // console.log('this.saveableCanvas.ctx 2', this.saveableCanvas.ctx)
           

       
                        
                    }}
                >
                    Undo
          </button> */}
            </div>
        )

    }
}

export default connect(state => state, null, null, { withRef: true })(Canvas);