import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App2 from './App2'
import Login from './Login';

function App() {

  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Login />} /> 
        <Route path="/app2" element={<App2 />} />
        
      </Routes>
    </Router>
  );
}

export default App
