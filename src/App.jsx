import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Game from './pages/game/index';
import Levels from './pages/levels';
import Topics from './pages/topics';

function App() {

  return <main className={`flexColCenter`}>
    <Router>
      <Routes>
        <Route path='/' element={<Topics/>}/>
        <Route path='/quiz-levels' element={<Levels/>}/>
        <Route path='/quiz-game' element={<Game/>}/>
      </Routes>
    </Router>
  </main>
}

export default App
