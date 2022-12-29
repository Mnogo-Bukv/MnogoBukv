import React from 'react'
// eslint-disable-next-line import/no-internal-modules
import { createRoot } from 'react-dom/client'
import { App } from './views'

const container = document.createElement('div')
document.body.style.margin = '0'
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
