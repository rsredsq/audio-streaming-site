import 'sanitize.css/sanitize.css'
import './index.css'
import 'react-soundplayer/styles/buttons.css'
import 'react-soundplayer/styles/cover.css'
import 'react-soundplayer/styles/icons.css'
import 'react-soundplayer/styles/progress.css'
import 'react-soundplayer/styles/volume.css'
import 'ace-css/css/ace.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
