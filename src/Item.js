import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content } = props
  return (
    <h2 className="Item">
      {content}
    </h2>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
}
