import React from 'react';


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
  constructor (props) {
    super(props);
    const { data, param } = props;
    this.state = {
      query: param,
      total: data.total,
      news: data.news.map(x =>
        <div className="News">
          <h3>{x.title}</h3>
          <p>{x.datetime}</p>
          <p>{x.content}</p>
        </div>)
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange (event) {
    this.setState({query: event.target.value});
  }

  search() {
    const self = this;
    const params = new URLSearchParams({q: self.state.query});
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

        <div>
          <div>
            {this.state.total} items
          </div>
          <div>
            {this.state.news}
          </div>
        </div>
      </div>
    );
  }
}


export default Search;
