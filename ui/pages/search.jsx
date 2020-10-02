import React from 'react';

import NotFoundPage from './404';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';


// TODO: ドメイン名と port 番号を環境変数から取る。
export async function getServerSideProps({ query }) {
  const param = query.q
  const url = `http://server:6000/search?q=${param}`;
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


class Search extends React.Component {
  constructor(props) {
    super(props);
    const { data, param, statusCode } = props;
    this.state = {
      query: param,
      total: data.total,
      news: data.news,
      statusCode: statusCode
    };
  }

  render() {
    if (this.state.statusCode == 404) {
      return <NotFoundPage />
    }

    return (
      <div>
        <SearchForm query={ this.state.query } />
        <SearchResult news={ this.state.news } total={ this.state.total } />
      </div>
    );
  }
}

export default Search;
