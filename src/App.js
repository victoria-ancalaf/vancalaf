import './App.css';
import Navbar from './components/navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
