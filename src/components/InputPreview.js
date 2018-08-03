import React from 'react';

export default class InputPreview extends React.Component {
	render () {
		return (
			<div className="centered">
				<input
					autoFocus
					className="group"
					type="text"
					value={this.props.value}
					placeholder="Search for Learning Objectives..."
					onChange={e => {this.props.onChange(e.target.value)}}
					/>
				<div className="bar"></div>
			</div>
		)
	}
}