import React, { useState } from 'react'
import { CButton, CCollapse } from '@coreui/react'
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
        color="secondary"
        href="#"
        onClick={(event) => {
          event.preventDefault()
          setVisible(!visible)
        }}
        variant="outline"
        style={{marginLeft:"0", marginBottom: "12px"}}
        className='rounded-pill'
      >
        {label}
      </CButton>
      <CCollapse visible={visible}>
            {children}
      </CCollapse>
    </div>
  )
}
