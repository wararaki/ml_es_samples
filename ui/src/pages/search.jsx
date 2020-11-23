import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

import NotFoundPage from './404';
import Paging from '../components/Paging';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { Box } from '@material-ui/core';


export async function getServerSideProps({ query }) {
  const param = query.q? query.q: '';
  const page = query.page? query.page : 1;
  const limit = query.limit? query.limit: 10;
  const url = encodeURI(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/search?q=${param}&page=${page}&limit=${limit}`);
  const response = await fetch(url);
  const statusCode = response.status;
  const result = await response.json();

  return {
    props: {
      result,
      param,
      page,
      limit,
      statusCode
    }
  };
};


const Search = (props) => {
  const {result, param, page, limit, statusCode} = props;
  const [query, setQuery] = useState(param);

  if (statusCode === 404) {
    return <NotFoundPage />
  }

  return (
    <Container maxWidth="md">
      <Box>
        <SearchForm query={ query } />
        <SearchResult result={ result } page={ page } />
        <Paging query={ query } page={ page } total={ result.total } limit={ limit } />
      </Box>
    </Container>
  );
}

export default Search;
