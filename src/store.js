import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import messageReducer from './reducers/message'
import searchResultReducer from './reducers/searchResult'
import stepIndexReducer from './reducers/stepIndex'
import lOsAndStepsReducer from './reducers/lOsAndSteps'
import color from './reducers/color'
import image from './reducers/image'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer,
  searchResultReducer,
  stepIndexReducer,
  lOsAndStepsReducer,
  image,
  color
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
  
)

export default store;