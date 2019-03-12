import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

function ButtonM(props) {
  return (
    <Button {...props}>{`ButtonM: ${props.children}`}</Button>
  );
}

ButtonM.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'large', 'medium']),
};

export default ButtonM;
