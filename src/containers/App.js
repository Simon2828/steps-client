import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {setSearchResult} from '../actions/searchResult';
import {setStepIndex} from '../actions/stepIndex';
import {clearMessage} from '../actions/clearMessage';
import {clearSearchResult} from '../actions/clearSearchResult';
import {storelOsAndSteps} from '../actions/lOsAndSteps';
import {Link} from 'react-router-dom';
import TargetsApi from '../targetsApi';
import Fuse from 'fuse.js';
import LoResults from '../components/LoResults';
import api from '../api';
import {API} from 'aws-amplify';

let fuse;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lOs: ''
        }
    }
    
    componentDidMount() {
        this._fetchAllLos();
    }
    
    _fetchAllLos = () => {
        let myInit = { 
            headers: {}, //OPTIONAL
            response: true // OPTIONAL (return entire response object instead of response.data)
        }
        API.get('peermarkit', '/learning-objectives/')
        .then(response => {
            return response[0].lOs.map((obj, index) => {
                let s2s = obj.stepsToSuccess.split(',');
                function uniqueSteps(arr) {return [...new Set(arr)]};
                return {lO:obj.lO, stepsToSuccess: uniqueSteps(s2s), index, databaseId:obj.lOId};
            })
        })
        .then(res=>this._storelOsAndSteps(res))
        .catch(error => {
            console.log('error.response', error.response)
        });

        //below will all change - when using sql
        // api.getAllLos()
        // .then(res => {
        //     console.log('res from sql', res)
        //     return res.body.map((obj, index) => {
        //         let s2s = obj.stepsToSuccess.split(',');
        //         function uniqueSteps(arr) {return [...new Set(arr)]};
        //         return {lO:obj.lO, stepsToSuccess: uniqueSteps(s2s), index, databaseId:obj.lOId};
        //     })
            
        // })
        // .then(res=> this._storelOsAndSteps(res))
        // .catch(console.error)
    }
    
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

    _loClicked = (index) => {
        this.props.dispatch(setStepIndex(index));
        this.props.dispatch(clearMessage());
    }

    _storelOsAndSteps = (data) => {
        this.props.dispatch(storelOsAndSteps(data))
    }

    render () {

        const {message} = this.props.messageReducer;
        const {result} = this.props.searchResultReducer;

        return (
        	<div>
                {/* <Link to={process.env.PUBLIC_URL + '/teacher'}><button className="button--teacher-login">Teacher login</button></Link> */}
                <InputPreview
                    value={message}
                    onChange={(value)=>{this._onChange(value);this._fuseSearch(value)}}/>
                <LoResults className="loResults" result={result} onClick={(index)=>{this._loClicked(index)}}/>  
            </div>
        )
    }
}

export default connect(state => state)(App);