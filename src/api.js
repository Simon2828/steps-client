import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
    
    getAllLos = () => (
      superagent
      .get(`${API_HOST}/steps`)
    )
 
    editLo = (originalLO, loValue, stepIndex, databaseId)  => {
      return superagent
      .post(`${API_HOST}/steps/edit-lo`)
      .send({originalLO, lO: loValue, id: stepIndex.index, databaseId})
      .set('Accept', 'application/json')
      
    }
    
    editStep = (originalStep, stepValue, stepIndex, databaseId) => {
      return superagent
      .post(`${API_HOST}/steps/edit-step`)
      .send({originalStep, step: stepValue, stepIndex, databaseId})
      .set('Accept', 'application/json')
    }

    // need the target value to create new entry into database using primary key..


  }
  
  export default new Api();