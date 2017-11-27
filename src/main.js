import React from 'react'
import {render} from 'react-dom'

// append redux to the main js
import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {Provider} from 'react-redux'


//import reducers index to feed it to createStore
import reducers from './reducers/index'

//import Components from ./components/compo-name
import App from './components/App'
import Numbers from './components/Numbers'

const middleware = applyMiddleware(logger)

const store = createStore(reducers,middleware)


render(<Provider store={store}>
    <App />
</Provider>,document.getElementById('app'));