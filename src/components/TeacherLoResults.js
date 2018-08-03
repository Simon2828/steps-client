import React from 'react';
import {Link} from 'react-router-dom';


const TeacherLoResults = (props) => {
    if (!props.result) {
        return null
    }
    else {
    let Los = props.result.map((learningObj, orderOfResultsIndex) => {
      return <Link to={process.env.PUBLIC_URL + '/teacher/steps-to-success'} className="loResults margin" onClick={props.onClick.bind(this,learningObj.index, orderOfResultsIndex)}>
      {learningObj.lO}</Link>;
      })
    
      return (
        <div className="flex-container">
          {Los}
        </div>
      )
    }
}


export default TeacherLoResults;