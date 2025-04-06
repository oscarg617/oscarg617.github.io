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

import './experience.styles.css'


const Experience = () => {
    return (
    <div className='experience' >
        <p>Experience</p>
        <CCollapse visible={true} >
        <CCard>
        <CCardBody>
            <Timeline  position="right">
                <TimelineItem className='tl-item' >
                    <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
                    <TimelineSeparator className='tl-sep' sx={{ margin: "50px" }}>
                        <TimelineConnector  className='tl-con' sx={{ py: "1005px" }} />
                        <div>
                            <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, px: '20px', py: '40px'}} className='tl-dot' >
                                <Icon className='timeline-icon'>
                                    <img className='svg-image-rma' src={rma} alt=""/>
                                </Icon>
                            </TimelineDot>
                        </div>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className='tl-cont' sx={{ py: '25px', px: 2 }}>
                        <Typography className='tl-type' variant="body2" component="span" px={{ color: "gray" }} >
                            June 2023 - Aug 2023
                        </Typography>
                        <Typography className='tl-type' variant="subtitle1" px={{ color: "black" }} >
                            Risk Management Association
                        </Typography>
                        <Typography className='tl-type' variant="subtitle2" px={{ color: "gray" }} >
                            Software Engineer Intern
                        </Typography>
                        <ul>
                            <li>
                                Modernized methods of financial record submissions by streamlining financial statements from partnered
                                vendor's third-party API using AWS API Gateway and Lambda (Python)
                            </li>
                            {/* <li>
                            Optimized validations on records using Pandas to provide rejection codes that indicate untrustworthy record
                            structure, reducing submission time by 15%
                            </li> */}
                            <li>
                                Delivered and presented best practices in cloud services in a proof of concept API to the CPO and 5 senior
                                managers, initiating the partnership with two vendors
                            </li>
                            {/* <li>
                            Redesigned MySQL database to allow for more efficient API communication by creating stored procedures and
                            indexes, reducing query execution time by 10%
                            </li> */}
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