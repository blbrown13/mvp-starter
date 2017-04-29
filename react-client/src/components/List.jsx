import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Hotel List </h4>
    There are { props.hotels.length } hotels.
    { props.hotels.map((hotel, index) => <ListItem hotel={hotel} key={index}/>)}
  </div>
)

export default List;
