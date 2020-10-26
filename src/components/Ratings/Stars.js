import React from 'react';
import { Rating } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Stars = (props) => (
    
  <Rating icon='star' defaultRating={props.rate} maxRating={5} />
)

Stars.propTypes = {
    rate: PropTypes.number
}

export default Stars;