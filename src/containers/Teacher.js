import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {setSearchResult} from '../actions/searchResult';
import {setStepIndex} from '../actions/stepIndex';
import {clearMessage} from '../actions/clearMessage';
import {storelOsAndSteps} from '../actions/lOsAndSteps';
import {Link} from 'react-router-dom';
import TargetsApi from '../targetsApi';
import Fuse from 'fuse.js';
import TeacherLoResults from '../components/TeacherLoResults';
import api from '../api';

let fuse;

class App extends Component {
    
	_onChange = (value) => {
        this.props.dispatch(setMessage(value))
    }
    
    _fuseSearch = (value) => {
        let options = {
            keys: ['lO', 'stepsToSuccess']
          };

        fuse = new Fuse(this.props.lOsAndStepsReducer, options)
        let fuseSearchResult = fuse.search(value);
        this.props.dispatch(setSearchResult(fuseSearchResult));
    }

    _loClicked = (index, orderOfResultsIndex) => {
        this.props.dispatch(setStepIndex(index, orderOfResultsIndex));
        this.props.dispatch(clearMessage());
    }

    // _storelOsAndSteps = (data) => {
    //     this.props.dispatch(storelOsAndSteps(data))
    // }



    render () {

        const {message} = this.props.messageReducer;
        const {result} = this.props.searchResultReducer;

        return (
        	<div>
                <Link to={process.env.PUBLIC_URL + '/'}><button className="button--home">Home</button></Link>
                <InputPreview
                    value={message}
                    onChange={(value)=>{this._onChange(value);this._fuseSearch(value)}}/>
                <TeacherLoResults className="loResults" result={result} onClick={(index, orderOfResultsIndex)=>{this._loClicked(index, orderOfResultsIndex)}}/>  
            </div>
        )
    }
}

export default connect(state => state)(App);