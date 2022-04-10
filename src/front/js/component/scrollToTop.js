import React from "react";
import { useEffect,  } from "react";
import { Link, useParams, useHistory,useLocation } from "react-router-dom";
import PropTypes from "prop-types";


export const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};




let oldclass = `class ScrollToTop extends React.Component {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default ScrollToTop;
ScrollToTop.propTypes = {
	location: PropTypes.object,
	children: PropTypes.any
};`