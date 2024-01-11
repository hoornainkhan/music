// import React from 'react'
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import HomePage from './components/Homepage'
// import Searchbar from './components/Searchbar'
// import MusicPlayer from './components/MusicPlayer'
// function App() {
//   return (
//     <div>
//     <Router>
//       <Routes>
//         <Route exact path="/" component={<Searchbar/>} />
//         <Route path="/music/:id" component={<MusicPlayer/>} />
//       </Routes> 
//     </Router>
//     <Navbar/>
//     <Searchbar/>
//     </div>
//   )
// }
// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Searchbar from './components/Searchbar';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Searchbar />} />
          <Route path="/track/:id" element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
