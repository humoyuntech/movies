// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')).render(
    <>
        <CssBaseline />
        <App />
    </>
)
