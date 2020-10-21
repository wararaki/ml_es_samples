import News from './News';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  total: {
    marginTop: 10,
    marginLeft: 5
  }
}));

const SearchResult = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={ classes.total }>
        { props.total } items
      </div>
      <div>
        { props.news.map(x => <News data={ x } key={ x.news_id } />) }
      </div>
    </div>
  );
}

export default SearchResult;
