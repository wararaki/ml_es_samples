import React from 'react';

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

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  search() {
    const params = new URLSearchParams({ q: this.state.query });
    const url = `http://localhost:3000/search?${params}`;

    location.href = url;
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <input type="text" value={this.state.query} onChange={this.handleChange} />
          </form>
          <button onClick={this.search}>Search</button>
        </div>

        <SearchResult news={this.state.news} total={this.state.total} />
      </div>
    );
  }
}

export default Search;
