import Intro from './components/intro/intro.component';
import Footer from './components/footer/footer.component';
import Education from './components/education/education.component';
import Experience from './components/experience/experience.component';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Intro />
        <Footer />
        <Experience />
        <Education />
    </div>
  );
}

export default App;
