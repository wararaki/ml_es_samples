import React from 'react';

import SearchForm from '../components/SearchForm';


class Home extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchForm query={ '' } />
      </div>
    );
  }
}

export default Home;
