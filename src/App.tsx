import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homepage';
import Download from './pages/download';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  )
}

export default App