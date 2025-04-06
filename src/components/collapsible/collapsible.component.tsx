import React, { useState } from 'react'
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


interface CollapsibleProps {
    children: React.ReactNode;
    label: string;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ children, label }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>

      <CButton
        color="black"
        href="#"
        onClick={(event) => {
          event.preventDefault()
          setVisible(!visible)
        }}
        style={{marginLeft:"0", marginBottom: "10px", backgroundColor: "#eeeeee", color: "black"}}
        className='projects-button'
      >
        
        {label}
      </CButton>
      <CCollapse visible={visible}>
          <CCardBody>
            {children}
          </CCardBody>
      </CCollapse>
    </div>
  )
}
