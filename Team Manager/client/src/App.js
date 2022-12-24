import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './views/Table';
import Main from './views/Main';


function App() {
    return (
    <div className="App">
               <Routes>
                    <Route element={<Table/>} path="/players/list" />
                    <Route element={<Main/>} path="/players/addplayer" />
                </Routes>               
    </div>
    );
}
export default App;
