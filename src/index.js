import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { WrapperApp} from '../src/App'
import { Provider } from 'react-redux';



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <WrapperApp />
  </Provider>,
    document.getElementById('root')
);