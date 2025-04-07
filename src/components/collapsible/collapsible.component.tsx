import React, { useState } from 'react'
import { CButton, CCollapse, CCardBody } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import './collapsible.styles.scss'


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
