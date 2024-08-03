import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import NewEvent from './pages/NewEvent';
import Book from './pages/Book';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/home' element={<Home />} />
        <Route path='/newEvent' element={<NewEvent />} />
        <Route path='/book/:id' element={<Book />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
