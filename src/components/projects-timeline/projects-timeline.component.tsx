import { Collapsible } from "../collapsible/collapsible.component"
import { TimelineItem, TimelineOppositeContent, TimelineContent, TimelineSeparator, TimelineConnector, TimelineDot } from "@mui/lab"
import Typography from '@mui/material/Typography';
import Icon from '@material-ui/core/Icon';
import cs161 from '../../assets/cs161.png'
import cs162 from '../../assets/cs162.png'
import cs164 from '../../assets/cs164.png'
import cs186 from '../../assets/cs186.png'
import cs189 from '../../assets/cs189.png'


const ProjectsTimeline = () => {

    let projects: { image: string, class: string, projectName: string, bullet: string }[] = [
        { 
            "image": cs164,
            "class": "Fall 2024 - Programming Languages and Assemblers", 
            "projectName": "Compiler", 
            "bullet": "Developed a complete compiler for ChocoPy (statically typed Python dialect) implementing lexical/syntax analysis with JFlex and CUP, semantic analysis with custom symbol tables, sophisticated type checking with error recovery, and RISC-V assembly code generation"
        },
        { 
            "image": cs186,
            "class": "Fall 2024 - Databases", 
            "projectName": "RookieDB", 
            "bullet": "Implemented a comprehensive database engine in Java with B+ tree indexing, various join algorithms (block nested loop, sort merge, grace hash), and multigranularity concurrency control with two-phase locking to enable efficient transaction isolation"
        },
        {
            "image": cs189,
            "class": "Spring 2024 - Intro to Machine Learning", 
            "projectName": "Neural Network ", 
            "bullet": "Built the backpropagation of a neural network, deriving gradient descent formulas for both fully-connected and convolutional layers, constructing forward/backward passes with activation and loss functions, and achieving 96% test accuracy on the Iris dataset"
        },
        {
            "image": cs161,
            "class": "Fall 2023 - Computer Security", 
            "projectName": "Secure File Sharing System ", 
            "bullet": "Designed a secure file sharing system in Golang that allows users to log in, store files, and share files with other users, while in the presence of attackers"
        },
        {
            "image": cs162,
            "class": "Fall 2023 - Operating Systems", 
            "projectName": "PintOS", 
            "bullet": "Led the successful development of the C-based PintOS operating system inspired by Linux to robustly support core OS components and features, such as: user programs, system calls, synchronization, user-level threading, priority scheduling, and a file system"
        },
    ];

    const projectItems = projects.map((project) => (
        <TimelineItem className='tl-item' >
            <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
            <TimelineSeparator className='tl-sep' sx={{ margin: "50px" }}>
                <TimelineConnector  className='tl-con' sx={{ py: "1005px" }} />
                <div>
                    <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, px: '20px', py: '40px'}} className='tl-dot' >
                        <Icon className='timeline-icon'>
                            <img className='svg-image' src={project.image} alt=""/>
                        </Icon>
                    </TimelineDot>
                </div>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className='tl-cont' sx={{ py: '25px', px: 2 }}>
                <Typography className='tl-type' variant="body2" component="span" px={{ color: "gray" }} >
                    {project.class}
                </Typography>
                <Typography className='tl-type' variant="subtitle1" px={{ color: "black" }} >
                    {project.projectName}
                </Typography>
                <ul>
                    <li>
                        {project.bullet}
                    </li>
                </ul>
            </TimelineContent>
        </TimelineItem>
    ))


    return (
        <Collapsible children={projectItems} label='Featured School Projects' />
    )
}

export default ProjectsTimeline;