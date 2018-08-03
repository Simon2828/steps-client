import React from 'react'
import Hammer from 'react-hammerjs';
import { connect } from 'react-redux';


class StepsToSuccess extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            swipedRight: [],
            swipedLeft: [],
            tick: '-hidden'
        }
        this.handleSwipeRight = this.handleSwipeRight.bind(this);
        this.handleSwipeLeft = this.handleSwipeLeft.bind(this);
        this.handleTap = this.handleTap.bind(this);
    }

    componentDidMount() {
        let stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess;
        this.setState({
            swipedRight: stepsToSuccess.map((step, i) => 'initial'),
            swipedLeft: stepsToSuccess.map((step, i) => '-hidden')
        });
    }

    handleSwipeRight(e, i) {
        let swipedRight = [...this.state.swipedRight];
        let swipedLeft = [...this.state.swipedLeft];
        swipedLeft[i] = false;
        swipedRight[i] = true;
        this.setState({ swipedRight, swipedLeft, tick: '' });

        // let el = document.querySelector(`.item${this.props.index}`);// - accessing dom...improve?
        // setTimeout(() => el.style.transform = 'translateX(0px)', 500);

    }

    handleSwipeLeft(e, i) {
        let swipedRight = [...this.state.swipedRight];
        let swipedLeft = [...this.state.swipedLeft];
        let tick = '-hidden';
        swipedRight[i] = false;
        swipedLeft[i] = true;
        this.setState({ swipedRight, swipedLeft, tick });

        // let el = document.querySelector(`.item${this.props.index}`);// - accessing dom...improve?
        // setTimeout(() => el.style.transform = 'translateX(0px)', 500);
    }

    handleTap() {
        console.log('tap');
    }

    render() {
        let className = '';
        this.state.swipedRight.forEach(step => {
            if (step === true) {
                className = 'swiped-right'
            }
        })
        this.state.swipedLeft.forEach(step => {
            if (step === true) {
                className = 'swiped-left'
            }
        })

        return (
            <Hammer onSwipeRight={(e, i) => this.handleSwipeRight(e, this.props.index)} onSwipeLeft={(e, i) => this.handleSwipeLeft(e, this.props.index)} className={`${className} item${this.props.index} loResults steps`}>

                <li className={`${this.props.className} loResults`} onClick={this.props.onClick.bind(this, this.props.index)}>
                    {this.props.step}
                    <span style={{ marginLeft: "1em" }}>
                        <svg version="1.1" className={`tick${this.state.tick}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 37 37" height="20" width="20" style={{ enableBackground: 'new 0 0 37 37' }} xmlSpace="preserve">
                            <path className={`${this.props.className} circ path`} style={{ fill: 'none', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} d="M30.5,6.5L30.5,6.5c6.6,6.6,6.6,17.4,0,24l0,0c-6.6,6.6-17.4,6.6-24,0l0,0c-6.6-6.6-6.6-17.4,0-24l0,0C13.1-0.2,23.9-0.2,30.5,6.5z"
                            />
                            <polyline className={`${this.props.className} tick path`} style={{ fill: 'none', strokeWidth: 3, strokeLinejoin: 'round', strokeMiterlimit: 10 }} points="11.6,20 15.9,24.2 26.4,13.8 " />
                        </svg>
                    </span>
                </li>
            </Hammer>
        )


    }
}



export default connect(state => state)(StepsToSuccess)