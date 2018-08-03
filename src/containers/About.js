
import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import StepsToSuccess from '../components/StepsToSuccess';
import {clearSearchResult} from '../actions/clearSearchResult';
import Camera from '../containers/Camera'

class About extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
			stepsToSuccess: {0:"card", 1:"card", 2:"card", 3:"card", 4:"card", 5:"card", 6:"card", 7:"card", 8:"card", 9:"card", 10:"card"}
        }
        this.toggleHighlight = this.toggleHighlight.bind(this);
	}

    toggleHighlight(index,e) {

		this.setState({stepsToSuccess: {...this.state.stepsToSuccess, [index]: "card-highlighted",}})
	}

	render () {
		let learningObj;
		let stepsToSuccess;

		{if (this.props.stepIndexReducer.index == null) {
			return (
				<div>
				<Link to={process.env.PUBLIC_URL}>
                    <button className="searchButton">Search</button>
                </Link>
			</div>
			)
		}
			
		else if (this.props.stepIndexReducer.orderOfResultsIndex !== null) {
			learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].lO}
			stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.index].stepsToSuccess
		}
		return (
			<div>
				{/* <Link to={process.env.PUBLIC_URL} >
                    <button className="searchButton">Search</button>
                </Link> */}
			<div className="centered">
			<h2 className={`lO loResults`}>L.O. {learningObj}</h2>
			<div className="bar"></div>
			<br />
			<ul className='ul-container'>
		
				{stepsToSuccess.map((step,index)=> {
			return <StepsToSuccess className={`steps ${this.state.stepsToSuccess[index]}`} onClick={index=>this.toggleHighlight(index)} step={step} index={index} />})}
				
			</ul>
			<Link to={process.env.PUBLIC_URL + '/camera'} >
                    <button className="searchButton">Take photo of work</button> {/*change to camera icon*/}
                </Link>
			</div>
			</div>
		)
	}
}




export default connect(state => state)(About)