import './App.css';
import Home from './components/pages/Home';
import SearchPage from './components/pages/SearchPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>

          <Route path='/search' element={<SearchPage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
