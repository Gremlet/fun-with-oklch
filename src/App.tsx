import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import More from './views/More'
import EvenMore from './views/EvenMore'
import Header from './components/Header'

import './App.css'

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/more' element={<More />} />
                <Route path='/even-more' element={<EvenMore />} />
            </Routes>
        </Router>
    )
}

export default App
