import React from 'react';

import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';


export async function getServerSideProps({ query }) {
  const param = query.q
  const url = `http://localhost:8080/search?q=${param}`;
  const result = await fetch(
    url,
    {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
  const data = await result.json();

  return {
    props: {
      data,
      param
    }
  };
}


class Search extends React.Component {
  constructor(props) {
    super(props);
    const { data, param } = props;
    this.state = {
      query: param,
      total: data.total,
      news: data.news
    };
  }

  render() {
    return (
      <div>
        <SearchForm query={ this.state.query } />
        <SearchResult news={ this.state.news } total={ this.state.total } />
      </div>
    );
  }
}

export default Search;
