import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.hotel.rating
    };
    this.onChange = this.onChange.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  onChange(event) {
    this.setState({
      rating: event.target.value
    })
  }

  updateRating(event) {
    this.props.hotel.rating = event.target.value;
    this.refs.updateBar.value = '';
    console.log('updated rating');
    console.log('gonna save to database...');
  }

  render () {
    return (<div id="list-item">
      <div id="list-item-name">{ this.props.hotel.name }</div>
      <div id="list-item-rating">Runnability: { this.state.rating }</div>
      <div>{ this.props.hotel.vicinity }</div>
      <div>{ this.props.hotel.loc }</div>
        Update Runnability: <input value={this.state.rating} onChange={this.onChange} ref="updateBar"/>
      <button onClick={this.updateRating}> Update </button>
    </div>)
  }
}

export default ListItem;
