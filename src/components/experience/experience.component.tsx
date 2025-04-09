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
import { CCollapse, CCard, CCardBody } from '@coreui/react';

import './experience.styles.scss'


const Experience = () => {
    return (
    <div className='experience' >
        <p>Experience</p>
        <CCollapse visible={true} >
        <CCard>
        <CCardBody>
            <Timeline  position="right" sx={{ padding: '0px' }}>
                <TimelineItem className='exp-tl-item'  >
                    <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                    <TimelineSeparator className='exp-tl-sep' >
                        <TimelineConnector  className='exp-tl-con' />
                        <div>
                            <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, px: '20px', py: '40px'}} className='exp-tl-dot' >
                                <Icon className='exp-timeline-icon'>
                                    <img className='exp-svg-image-rma' src={rma} alt=""/>
                                </Icon>
                            </TimelineDot>
                        </div>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='exp-tl-cont' sx={{ py: '25px', px: 2 }}>
                        <Typography className='exp-tl-type' variant="body2" component="span" px={{ color: "gray" }} >
                            June 2023 - Aug 2023
                        </Typography>
                        <Typography className='exp-tl-type exp-title' variant="subtitle1" px={{ color: "black" }} >
                            Risk Management Association
                        </Typography>
                        <Typography className='exp-tl-type' variant="subtitle2" px={{ color: "gray" }} >
                            Software Engineer Intern
                        </Typography>
                        <ul>
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