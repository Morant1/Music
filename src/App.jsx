import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';




function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route element={<HomePage />} path='/' />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
