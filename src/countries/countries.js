import React, { Component } from 'react'

export class Countries extends Component {
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
    let { isLoaded, items } = this.state;

    return (
      <div>
        <div className="container">
          <h1>Regions Dropdown list</h1>
          <select id="regions" name="regions">
            {items.map(item => (
              <option key={item.id}>
                {item.region}
              </option>
            ))}
          </select>

        </div>
      </div>
    )
  }
}
