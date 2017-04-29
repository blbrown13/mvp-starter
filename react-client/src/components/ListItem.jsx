import React from 'react';

const ListItem = (props) => (
  <div>
    <div>Name: { props.hotel.name }</div>
    <div>Address: { props.hotel.vicinity }</div>
    <div>Rating: { props.hotel.rating }</div>
    <div>Location: { props.hotel.loc }</div>
  </div>
)

export default ListItem;
