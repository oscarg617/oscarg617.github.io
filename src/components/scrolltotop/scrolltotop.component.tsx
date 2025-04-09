import {useEffect, useRef} from 'react'
import React from 'react';
import { ReactNode } from 'react';

import {
useLocation,
useNavigate,
useParams
} from "react-router-dom";

function withRouter(Component: any) {
function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
    <Component
        {...props}
        router={{ location, navigate, params }}
    />
    );
}

return ComponentWithRouterProp;
}

const ScrollToTopComponent = () => {
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      window.scrollTo(0, 0)
    }
  })

  return null
}

export const ScrollToTop = withRouter(ScrollToTopComponent)
