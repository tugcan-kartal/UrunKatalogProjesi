import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ItemsPage from './components/ItemsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<LoginPage />} />
          <Route path='/items' element={<ItemsPage />} />
          {/* <Route path='/info_of_items' element={} /> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
