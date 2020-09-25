import React from 'react';

class Home extends React.Component {
  constructor (props) {
    super(props);
    this.state = {query: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange (event) {
    this.setState({query: event.target.value});
  }
  
  search() {
    const self = this;
    const params = new URLSearchParams({q: self.state.query});
    const url = `http://localhost:3000/search?${params}`;
    
    location.href = url;
  }

  render() {
      return (
      <div>
        <form>
          <input type="text" value={this.state.query} onChange={this.handleChange} />
        </form>
        <button onClick={this.search}>Search</button>
      </div>
      )
  }
}

export default Home;
