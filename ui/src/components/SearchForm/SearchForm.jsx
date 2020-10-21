import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));


const SearchForm = (props) => {
  const classes = useStyles();
  const router = useRouter();

  const [query, setQuery] = useState(props.query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const search = () => {
    const params = {q: query};
    const url = {pathname: '/search?q=[query]', query: params};
    const urlAs = {pathname: '/search', query: params};

    router.push(url, urlAs);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={ onFormSubmit }>
      <InputBase
        className={ classes.input }
        placeholder="Search..."
        value={ query }
        onChange={ handleChange }
      />
      <IconButton type="submit" className={ classes.iconButton } aria-label="search" onClick={ search }>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchForm;
