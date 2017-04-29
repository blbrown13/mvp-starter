import React from 'react';

const ListItem = (props) => (
  <div>
    <div>{ props.hotel.name }</div>
    <div>{ props.hotel.description }</div>
  </div>
)

export default ListItem;
