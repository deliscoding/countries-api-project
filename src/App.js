import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  // fetches data and sets state which rerenders App
  componentDidMount() {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name.common}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}
