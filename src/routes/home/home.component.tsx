import './home.styles.scss'
import Intro from '../../components/intro/intro.component';
import Footer from '../../components/footer/footer.component';
import Education from '../../components/education/education.component';
import Experience from '../../components/experience/experience.component';
import Technologies from '../../components/technologies/technologies.component';

const Home = () => {
    return (
    <div className="App">
        <Intro />
        <Footer />
        <Technologies />
        <Experience />
        <Education />
    </div>
    )
}

export default Home;