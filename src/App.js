import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ItemsPage from './components/ItemsPage';
import FavouritePage from './components/FavouritePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<LoginPage />} />
          <Route path='/items' element={<ItemsPage />} />
          <Route path='/items/fav-items' element={<FavouritePage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
