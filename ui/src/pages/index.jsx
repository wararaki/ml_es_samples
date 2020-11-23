import React from 'react';
import Container from '@material-ui/core/Container';

import SearchForm from '../components/SearchForm';
import { Box } from '@material-ui/core';


const Home = () => {
  return (
    <Container maxWidth="md">
      <Box>
        <SearchForm query={ '' } />
      </Box>
    </Container>
  )
}

export default Home;
