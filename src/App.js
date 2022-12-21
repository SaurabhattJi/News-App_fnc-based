
import './App.css';
import React, { useState } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {  BrowserRouter as Router,Routes, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize= 6;
 const [progress, setProgress] = useState(0)

 
 

    return (
      <div>
        <Router>
         <Navbar/>
         <LoadingBar
         height={3}
          color='#f11946'
          progress={progress}
           />
          <Routes>
             <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
             <Route exact path="/newsapp" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
             <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/>} />
             <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>} />
             <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
             <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
             <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>} />
             <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;
