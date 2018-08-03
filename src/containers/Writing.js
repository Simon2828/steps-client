import React from 'react';
import Canvas from '../components/Canvas';
import { connect } from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';
import PaintStepsToSuccess from '../components/PaintStepsToSuccess';
import { changeColor } from '../actions/changeColor';
import { Link } from 'react-router-dom';

let clicked;
let ind;

class Writing extends React.Component {
    constructor(props) {
        super(props)
        this.changeColor = this.changeColor.bind(this);
        this.moveBrush = this.moveBrush.bind(this);
        this.state = {
            0: false, 1: false, 2: false, 3: false, 4: false, 5: false,
        }
    }

    changeColor(index, e) {
        const styleColor = window.getComputedStyle(e.target, null).getPropertyValue("color");
        this.props.dispatch(changeColor(styleColor));

        // import actions etc. to changeColor..
        // in canvas set colorChange using redux props

    }

    moveBrush(i) {
        this.setState({ [i]: !this.state[i] })
        ind = i;
    }

    render() {
        let blob = this.props.image;
        let stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess;
        clicked = this.state[ind] ? 'clicked' : '';

        return (
            <div className="Writing--container">
                <div className='container' style={{
                    display: 'block',
                    background: `url(${blob})top center no-repeat fixed`,
                    backgroundSize: 'cover',
                    position: 'relative',
                    margin: '-0 auto',
                    padding: '0',
                    textAlign: 'center',
                    overflow: 'hidden',
                    maxWidth: '178vh',
                    width: '100%',
                }} >
                    <Canvas className='canvas' ref={this.props.children} />
                    {/*DELETE?? added the ref - not needed? how
                    how to access the ref of 
                    */}
                </div>
                <div className='paintSteps'>
                {stepsToSuccess.map((step, index) => {
                    return (
                        <div className="paintStepsContainer">
                        <PaintStepsToSuccess stepsToSuccess={step} clicked={this.state[index]} movePaintbrush={this.moveBrush} color={this.props.color} index={index} onClick={(e) => this.changeColor(index, e)} />
                        </div>
                    )
                })}
                </div>
                <Link to={process.env.PUBLIC_URL + '/finished-marking'}><button className="button--home">Finished marking</button></Link>
            </div>
        )
    }
}

export default connect(state => state)(Writing);


// color of paintstepstosuccess done by index and css
// move color prop to canvas paint color
// think of ui to show this