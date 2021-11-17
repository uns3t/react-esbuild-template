/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'

const root = document.createElement('div')
root.className = 'root'
document.body.appendChild(root)

const App = () => {
  return (
    <div>
      <h1 className="esbuild">Hello, Esbuild!</h1>
      <h1 className="react">Hello, React!</h1>
    </div>
  )
}

ReactDOM.render(<App />, root)
