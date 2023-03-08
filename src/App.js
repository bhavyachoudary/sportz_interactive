import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import PlayerImage from './components/PlayerImage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/player-image/:id" element={<PlayerImage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
