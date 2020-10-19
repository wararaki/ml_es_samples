import React from 'react';
import Container from '@material-ui/core/Container';

import SearchForm from '../components/SearchForm';


const Home = () => {
  return (
    <Container>
      <div>
        <SearchForm query={ '' } />
      </div>
    </Container>
  )
}

export default Home;
