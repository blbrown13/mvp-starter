import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherthing: ''
    }
    // this.onChange = this.onChange.bind(this);
    // this.search = this.search.bind(this);
  }

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
    return (<div id="list-view">
      <h4> Hotel List </h4>
      There are { this.props.hotels.length } hotels.
      { this.props.hotels.map((hotel, index) => <ListItem hotel={hotel} key={index}/>)}
    </div>)
  }
}

export default List;

// const List = (props) => (
//   <div>
//     <h4> Hotel List </h4>
//     There are { props.hotels.length } hotels.
//     { props.hotels.map((hotel, index) => <ListItem hotel={hotel} key={index}/>)}
//   </div>
// )
