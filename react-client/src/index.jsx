import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [{name: 'Hotel California', description: 'Such a lovely place'}]
    }
    console.log('app is loaded');
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/hotels',
      success: (data) => {
        this.setState({
          hotels: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  search (term) {
    console.log(`Client made $ajax POST request to server for: ${term}...`);
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/hotels/import",
      data: { term: term },
      success : (result) => {
        console.log('server post request');
        this.setState({
          repos: result
        })
      },
      error: function(error) {
        alert(error);
      }
    });
  }

  render () {
    return (<div>
      <h1>Hotel Fitness Rating</h1>
      <List hotels={this.state.hotels}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
