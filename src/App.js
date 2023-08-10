import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/home';
import { ViewCard } from './components/currentPostView';
import { EditCard } from './components/currentPostEdit';
import { NewCard } from './components/createPostNew';

function App() {
  return (
    <div className="App">
      <div className='block-header'>
        <Link to="/posts/new" className='btn'>Создать пост</Link>
      </div>

      <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<ViewCard />} />
        <Route path="/posts/edit/:id" element={<EditCard />} />
        <Route path="/posts/new" element={<NewCard />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
