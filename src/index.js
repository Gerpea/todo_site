import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const App = () => (
  <div className='h-screen flex justify-center items-center'>
    <p className='text-6xl font-black italic'>Todo app</p>
  </div>
)

ReactDOM.render(<App />, document.querySelector('#root'))
