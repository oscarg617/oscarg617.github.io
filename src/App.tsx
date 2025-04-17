import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component';
import Header from './routes/header/header.component';
import Projects from './routes/projects/projects.component';
import ProjectPost from './routes/project-post/project-post.component';
import { projects } from './data/projects';

import './App.scss';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='projects' element={<Projects />}>
        </Route>
          {projects.map((project) => (
            <Route key={project.title} path={`projects/${project.title.toLowerCase()}`} element={<ProjectPost {...project} />} ></Route>
          ))}
      </Route>
    </Routes>
  )
}

export default App;
