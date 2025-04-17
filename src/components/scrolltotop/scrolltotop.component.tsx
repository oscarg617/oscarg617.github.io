import {useEffect, useRef} from 'react'
import { useLocation, useNavigate, useParams } from "react-router-dom";

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
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })
    }
  })

  return null
}

export const ScrollToTop = withRouter(ScrollToTopComponent)
