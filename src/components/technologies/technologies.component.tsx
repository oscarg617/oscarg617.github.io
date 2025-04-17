import python from '../../assets/python.svg'
import java from '../../assets/java.svg'
import c from '../../assets/c.svg'
import flask from '../../assets/flask.svg'
import pandas from '../../assets/pandas.svg'
import postgresql from '../../assets/postgresql.svg'
import git from '../../assets/git.svg'
import react from '../../assets/react.svg'

import './technologies.styles.scss'

const technologies = [
    { "site": "https://www.python.org", "source": python, "title": "Python" },
    { "site": "https://www.java.com", "source": java, "title": "Java" },
    { "site": "https://www.gnu.org/software/gnu-c-manual", "source": c, "title": "C" },
    { "site": "https://flask.palletsprojects.com/en/stable", "source": flask, "title": "Flask" },
    { "site": "https://pandas.pydata.org", "source": pandas, "title": "Pandas" },
    { "site": "https://www.postgresql.org", "source": postgresql, "title": "PostgreSQL" },
    { "site": "https://git-scm.com", "source": git, "title": "Git" },
    { "site": "https://react.dev/", "source": react, "title": "React" },
]

const Technologies = () => {
    return (
        <div className='technologies'>
            <p>Tech Stack</p>
            <div className='tech-list'>
                {technologies.map((tech) => (
                    <a className='tech-link' href={tech.site} target='_blank' rel='noopener noreferrer'>
                        <div className='tech-container' >
                            <img className='my-tech-item' src={tech.source} alt='' />
                            <h5 className='tech-title' >{tech.title}</h5>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Technologies