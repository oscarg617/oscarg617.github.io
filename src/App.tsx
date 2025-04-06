import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Education from './components/education/education.component';
import Experience from './components/experience/experience.component';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Footer />
        <Experience />
        <Education />
    </div>
  );
}

export default App;
