import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Icon from '@material-ui/core/Icon';
import rma from '../../assets/rma.svg';
import dans from '../../assets/basketball.png';
import { CCollapse, CCard, CCardBody } from '@coreui/react';

import './experience.styles.scss'


const Experience = () => {
    return (
    <div className='experience' style={{marginTop: '25px'}} >
        <p>Experience</p>
        <CCollapse visible={true} >
        <CCard>
        <CCardBody>
            <Timeline  position="right" sx={{ padding: '0px', margin: '0px' }}>
                <TimelineItem className='exp-tl-item' sx={{margin: '0px', padding: '0px', position: 'relative', maxWidth: '700px'}} >
                    <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                    <TimelineSeparator className='exp-tl-sep' sx={{margin: '0px', padding: '0px'}} >
                        <TimelineConnector  className='exp-tl-con' sx={{margin: '0px', padding: '0px', position: 'absolute'}} />
                        <div>
                            <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, padding: 0}} className='exp-tl-dot' >
                                <Icon className='exp-timeline-icon' style={{margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '2em', height: '2em'}} >
                                    <img className='exp-svg-image-dans' style={{width: '1.8em', height: 'auto', backgroundSize: 'contain', marginTop: '1px', display: 'block'}} src={dans} alt=""/>
                                </Icon>
                            </TimelineDot>
                        </div>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='exp-tl-cont' sx={{margin: 0, padding: 0, marginLeft: '3%', paddingBottom: '10px'}}>
                        <Typography className='exp-tl-type' variant="body2" sx={{fontSize: '13px'}} px={{ color: "gray" }} >
                            Feb. 2025 - Present
                        </Typography>
                        <Typography className='exp-tl-type' variant="body2" sx={{fontWeight: '501', padding: 0, margin: 0, fontSize: '1rem'}} px={{ color: "black" }} >
                            DANS
                        </Typography>
                        <Typography className='exp-tl-type' variant="body2" sx={{paddingBottom: '5px'}} px={{ color: "gray" }} >
                            Software Engineer
                        </Typography>
                        <ul style={{marginBottom: '0px', padding: 0, paddingLeft: '1em', fontSize: '0.9rem', listStyle: 'disc'}}>
                            <li>
                            Founded sports analytics startup developing NBA statistics platform that adjusts player performance based on opponent defensive strength and pace
                            </li>
                            <li>
                            Built end-to-end data pipeline processing NBA game logs using Python, PostgreSQL, and AWS to generate contextual performance insights
                            </li>
                            <li>
                            Developed full-stack web application (TypeScript/React/AWS) and open-source Python package distributed via PyPI
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem className='exp-tl-item' sx={{margin: '0px', padding: '0px', position: 'relative', maxWidth: '700px'}} >
                    <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                    <TimelineSeparator className='exp-tl-sep' sx={{margin: '0px', padding: '0px'}} >
                        <TimelineConnector  className='exp-tl-con' sx={{margin: '0px', padding: '0px', position: 'absolute'}} />
                        <div>
                            <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, padding: 0}}  className='exp-tl-dot' >
                                <Icon className='exp-timeline-icon' style={{margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '2em', height: '2em'}} >
                                    <img className='exp-svg-image-rma' style={{width: '1.5em', height: 'auto', backgroundSize: 'contain'}} src={rma} alt=""/>
                                </Icon>
                            </TimelineDot>
                        </div>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='exp-tl-cont'  sx={{margin: 0, padding: 0, marginLeft: '3%'}}>
                        <Typography className='exp-tl-type' variant="body2" sx={{fontSize: '13px'}} px={{ color: "gray" }} >
                            Jun. 2023 - Aug. 2023
                        </Typography>
                        <Typography className='exp-tl-type' variant="body2" sx={{fontWeight: '501', paddingBottom: '0', fontSize: '1rem'}} px={{ color: "black" }} >
                            Risk Management Association
                        </Typography>
                        <Typography className='exp-tl-type' variant="body2" sx={{paddingBottom: '5px'}} px={{ color: "gray" }} >
                            Software Engineer Intern
                        </Typography>
                        <ul style={{marginBottom: '0px', padding: 0, paddingLeft: '1em', fontSize: '0.9rem', listStyle: 'disc'}}>
                            <li>
                            Developed a financial record processing backend to enable vendors to submit records directly from their systems using AWS API Gateway and MySQL 
                            </li>
                            <li>
                            Implemented a data validation system to detect untrustworthy record structures using a Python Lambda integration with Pandas
                            </li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </CCardBody>
        </CCard>
        </CCollapse>
      </div>
    )
}

export default Experience;