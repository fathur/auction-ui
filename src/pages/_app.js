import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

import reducers from '@/reducers'
import '@/styles/bootstrap/bootstrap.scss'

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
)

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
