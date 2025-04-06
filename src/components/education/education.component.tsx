import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Icon from '@material-ui/core/Icon';
import berkeley from '../../assets/berkeley.webp'

import { CCollapse, CCard, CCardBody } from '@coreui/react';

import './education.styles.css'
import ProjectsTimeline from '../projects-timeline/projects-timeline.component';

export default function Education() {

  return (
    <div className='education'>
      <p>Education</p>
      <CCollapse visible={true}>
      <CCard>
      <CCardBody>
        <Timeline  position="right">
          <TimelineItem className='tl-item' >
            <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>
            <TimelineSeparator className='tl-sep' sx={{ margin: "50px" }}>
              <TimelineConnector  className='tl-con' sx={{ py: "10px" }} />
              <div>
                <TimelineDot sx={{ backgroundColor: 'white', border: 1, borderColor: '#eeeeee', margin: 0, px: '20px', py: '40px'}} className='tl-dot' >
                  <Icon className='timeline-icon'>
                    <img className='svg-image' src={berkeley} alt=""/>
                  </Icon>
                </TimelineDot>
              </div>
              <TimelineConnector sx={{ py: '10px' }}/>
            </TimelineSeparator>
            <TimelineContent className='tl-cont' sx={{ py: '25px', px: 2 }}>
              <Typography className='tl-type' variant="body2" component="span" px={{ color: "gray" }} >
                Aug 2020 - Dec 2024
              </Typography>
              <Typography className='tl-type' variant="subtitle1" px={{ color: "black" }} >
                University of California, Berkeley
              </Typography>
              <Typography className='tl-type' variant="subtitle2" px={{ color: "gray" }} >
                BS in Electrical Engineering and Computer Science
              </Typography>
              <ul>
                <li>
                  Relevant coursework: Programming Languages, Databases, Computer Architecture, Machine Learning, Computer Security, Operating Systems, Efficient Algorithms
                </li>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <ProjectsTimeline />
      </CCardBody>
      </CCard>
      </CCollapse>
    </div>
  );
}