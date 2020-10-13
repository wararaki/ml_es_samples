import React, { useState } from 'react';
// import Router from 'next/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const SearchForm = (props) => {
  const [query, setQuery] = useState(props.query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const search = () => {
    const params = new URLSearchParams({ q: query });
    const path = `./search?${params}`;
    // Router.push(path);
    window.location.href = path;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <div>
      <form onSubmit={ onFormSubmit }>
        <TextField label="Search..." variant="outlined" value={ query } onChange={ handleChange } />
      </form>
      <Button variant="outlined" onClick={ search }>Search</Button>
    </div>
  );
}

export default SearchForm;
