import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import NotFoundPage from './404';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';


export async function getServerSideProps({ query }) {
  const param = query.q;
  const url = encodeURI(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/search?q=${param}`);
  const response = await fetch(url);
  const statusCode = response.status;
  const data = await response.json();

  return {
    props: {
      data,
      param,
      statusCode
    }
  };
}


const Search = (props) => {
  const {data, param, statusCode} = props;
  const [query, setQuery] = useState(param);
  const [total, setTotal] = useState(data.total);
  const [news, setNews] = useState(data.news);

  if (statusCode === 404) {
    return <NotFoundPage />
  }

  return (
    <Container maxWidth="md">
      <div>
        <SearchForm query={ query } />
        <SearchResult news={ news } total={ total } />
      </div>
    </Container>
  );
}

export default Search;
