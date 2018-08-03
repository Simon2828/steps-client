import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TeacherStepsToSuccess from '../components/TeacherStepsToSuccess';
import ContentEditable from 'react-contenteditable';
import api from '../api';
import { editLo } from '../actions/editLo';
import { editStep } from '../actions/editStep';

class TeacherAbout extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			stepsToSuccess: { 0: "card", 1: "card", 2: "card", 3: "card", 4: "card", 5: "card", 6: "card", 7: "card", 8: "card", 9: "card", 10: "card" },
			html: `${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`,
			editedHtml: `${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`
		}
		this.edit = this.edit.bind(this);
	}

	edit(evt) {
		evt.target.value = `${this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO}`
		this.setState({ editedHtml: evt.target.value });

		evt.target.onfocus = function (e) {
			var el = this;
			requestAnimationFrame(function () {
				selectElementContents(el);
			});
		};
		function selectElementContents(el) {
			var range = document.createRange();
			range.selectNodeContents(el);
			var sel = window.getSelection();
			range.setStart(sel.anchorNode, 0);
			sel.removeAllRanges();
			sel.addRange(range);
		}
	}

	keyPress(event) {
		if (event.charCode == 13) {
			let elem = document.querySelector('.lO.loResults')
			elem.blur();
			event.preventDefault();
			let stepIndex = this.props.stepIndexReducer.index;
			let databaseId = this.props.lOsAndStepsReducer[stepIndex].databaseId;
			console.log('databaseId in teacherabout', databaseId)
			// need to edit state.html to put into first parame
			// though have changed to try to use databaseId...
			// need to see if sql query works, then how to get update into local state.html..

			// CURRENT - sort out above for steps to success aswell
			this.addEditedLo(this.state.html, elem.textContent, stepIndex, databaseId);
		}
	}

	addEditedLo = (originalLO, loValue, stepIndex, databaseId) => {
		return api.editLo(originalLO, loValue, stepIndex, databaseId)
			.end((err, res) => {
				if (err) console.log('error: ', err);
				this.props.dispatch(editLo(loValue, stepIndex))

			})

	}

	// have option to revert to old LO?

	addEditedStep = (originalStep, stepValue, stepIndex, databaseId) => {
		return api.editStep(originalStep, stepValue, stepIndex, databaseId)
			.end((err, res) => {
				if (err) console.log('error: ', err);
				this.props.dispatch(editStep(stepValue, stepIndex))

			})
	};

	stepKeyPress(index, event) {
		let stepIndex = this.props.stepIndexReducer.index; 
		let databaseId = this.props.lOsAndStepsReducer[stepIndex].databaseId;
		if (event.charCode == 13) {
			let elem = document.querySelector(`.steps${index}`)
			elem.blur();
			event.preventDefault();
			this.addEditedStep(this.props.lOsAndStepsReducer[stepIndex].stepsToSuccess[index], elem.textContent, index, databaseId);

		}
	}

	render() {
		let learningObj;
		let stepsToSuccess;

		{
			if (this.props.stepIndexReducer.index == null) {
				return (
					<div>
						<Link to={process.env.PUBLIC_URL}>
							<button className="searchButton">Search</button>
						</Link>
					</div>
				)
			}

			else if (this.props.stepIndexReducer.orderOfResultsIndex !== null) {
				learningObj = this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].lO
			}
			stepsToSuccess = this.props.searchResultReducer.result[this.props.stepIndexReducer.orderOfResultsIndex].stepsToSuccess

		}

		return (
			<div>
				<Link to={process.env.PUBLIC_URL}>
					<button className="searchButton">Search</button>
				</Link>
				<div className="centered">
					<ContentEditable className={`lO loResults`} onFocus={this.edit} onKeyPress={this.keyPress.bind(this)} html={this.state.editedHtml} disabled={false}></ContentEditable>
					<div className="bar"></div>
					<br />
					<ul>

						{stepsToSuccess.map((step, index) => {
							return <TeacherStepsToSuccess className={`steps ${this.state.stepsToSuccess[index]}`} onKeyPress={this.stepKeyPress.bind(this, index)} step={step} index={index}
							/>
						})}

					</ul>
				</div>
			</div >
		)
	}
}




export default connect(state => state)(TeacherAbout)