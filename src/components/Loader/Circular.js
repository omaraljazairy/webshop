import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

const Circular = (props) => (
    
  <CircularProgress color={props.color ? props.color : "primary"} />
)

Circular.propTypes = {
    color: PropTypes.string
}

export default Circular;