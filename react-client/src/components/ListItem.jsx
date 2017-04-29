import React from 'react';

const ListItem = (props) => (
  <div>
    <div>City: { props.hotel.city }</div>
    <div>Zipcode: { props.hotel.zipcode }</div>
    <div>Latitude: { props.hotel.latitude }</div>
    <div>Longitude: { props.hotel.longitude }</div>
  </div>
)

export default ListItem;
