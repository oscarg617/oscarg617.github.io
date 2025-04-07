import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component';
import Header from './routes/header/header.component';
import Projects from './routes/projects/projects.component';
import Blog from './routes/blog/blog.component';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='blog' element={<Blog />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
