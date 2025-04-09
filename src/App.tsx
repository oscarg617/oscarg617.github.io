import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component';
import Header from './routes/header/header.component';
import Projects from './routes/projects/projects.component';
import './App.scss';
import ProjectTitle from './routes/project-post/project-post.component';
import projectsData from './data/projects.json'


const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
        <Route path='projects' element={<Projects />}>
        </Route>
          {projectsData.map((project) => (
            <Route key={project.title} path={`projects/${project.title.toLowerCase()}`} element={<ProjectTitle {...project} />} ></Route>
          ))}
      </Route>
    </Routes>
  )
}

export default App;
