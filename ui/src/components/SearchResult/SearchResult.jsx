import News from './News';


const SearchResult = (props) => {
  return (
    <div>
      <div>
        { props.total } items
      </div>
      <div>
        { props.news.map(x => <News data={ x } key={ x.news_id } />) }
      </div>
    </div>
  );
}

export default SearchResult;
