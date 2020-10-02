import React from 'react';
import Button from '@material-ui/core/Button';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    const { query } = props;
    this.state = {
        query: query
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.search = this.search.bind(this);
  }
  
  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.search();
  }

  // TODO: domain と port を 環境変数から取るようにする。
  search() {
    const params = new URLSearchParams({ q: this.state.query });
    const url = `http://localhost:5000/search?${params}`;

    location.href = url;
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit }>
          <input type="text" value={ this.state.query } onChange={ this.handleChange } />
        </form>
        <Button onClick={ this.search }>Search</Button>
      </div>
    );
  }
}

export default SearchForm;
