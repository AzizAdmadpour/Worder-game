import {  Route, Routes } from 'react-router-dom';
import Guess_Word from './pages/guess_word';
import Main_page from './pages/main_page';
import Multi_Player from './pages/multi_player';
import "./index.css"
function App() {
  document.title = 'Worder Game';
  return (
    <div className="App">
      <Routes>
      <Route path="/guess-word" element={<Guess_Word />} />
      <Route path="/multi-player" element={<Multi_Player />} />
      <Route path="/" element={<Main_page />} />
      </Routes>
      <p className='copy-right'>Zhihat Developer</p>
</div>
  )
}

export default App;



