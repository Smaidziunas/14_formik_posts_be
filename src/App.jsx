import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App container'>
      <Header />
      <Route path={'/add-post'}>
        <AddPostPage />
      </Route>
      <Route path={'/'} exact>
        <HomePage />
      </Route>
    </div>
  );
}

export default App;
