import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const { query } = props;
    this.state = {
        query: query
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }
  
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  search() {
    const params = new URLSearchParams({ q: this.state.query });
    const url = `http://localhost:3000/search?${params}`;

    location.href = url;
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={ this.state.query } onChange={ this.handleChange } />
        </form>
        <button onClick={ this.search }>Search</button>
      </div>
    );
  }
}

export default SearchForm;
