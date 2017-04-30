import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thing: ''
    }
    // this.onChange = this.onChange.bind(this);
    // this.search = this.search.bind(this);
  }
  //
  // onChange(event) {
  //   this.setState({
  //     term: event.target.value
  //   })
  // }
  //
  // updateDB() {
  //   this.props.onSearch(this.state.term);
  // }

  render () {
    return (<div id="list-item">
      <div id="list-item-name">{ this.props.hotel.name }</div>
      <div id="list-item-rating">Runnability: { this.props.hotel.rating }</div>
      <div>Address: { this.props.hotel.vicinity }</div>
      <div>Location: { this.props.hotel.loc }</div>
    </div>)
  }
}

export default ListItem;

// const ListItem = (props) => (
//   <div>
//     <div>Name: { props.hotel.name }</div>
//     <div>Address: { props.hotel.vicinity }</div>
//     <div>Rating: { props.hotel.rating }</div>
//     <div>Location: { props.hotel.loc }</div>
//   </div>
// )
//
