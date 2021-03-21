import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '@/reducers'
import '@/styles/bootstrap/bootstrap.scss'


// const middleware = [thunk];

const store = createStore(
  reducers, /* preloadedState, */
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  )
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(thunk)
)

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
