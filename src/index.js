import 'sanitize.css/sanitize.css'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
