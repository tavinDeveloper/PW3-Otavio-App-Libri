import "./App.css";
import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import CreateBooks from './components/pages/CreateBooks';
import ListBooks from './components/pages/ListBooks';
import DetailBook from './components/pages/DetailBook'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/ListBooks" element={<ListBooks/>}/>
              <Route path="/CreateBooks" element={<CreateBooks/>}/>
              <Route path="/DetailBook/:cod_livro" element={<DetailBook/>}/>
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}