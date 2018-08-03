import React from 'react';
import {Link} from 'react-router-dom';

const LoResults = (props) => {
    if (!props.result) {
        return null
    }
    else {
    let Los = props.result.map((learningObj, index) => {
      return <Link to={process.env.PUBLIC_URL + '/steps-to-success'} key={index} className="loResults margin" onClick={props.onClick.bind(this,index)}>
      {learningObj.lO}</Link>;
      })
    
      return (
        <div className="flex-container">
          {Los}
        </div>
      )
    }
}


export default LoResults;