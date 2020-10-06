import React from 'react';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


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

  search() {
    const params = new URLSearchParams({ q: this.state.query });
    const path = `/search?${params}`;
    Router.push(path);
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit }>
          <TextField label="Search..." variant="outlined" value={ this.state.query } onChange={ this.handleChange } />
        </form>
        <Button variant="outlined" onClick={ this.search }>Search</Button>
      </div>
    );
  }
}

export default SearchForm;
