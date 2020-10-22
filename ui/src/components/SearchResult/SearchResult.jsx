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
  const { result, page } = props;

  return (
    <div>
      <div className={ classes.total }>
        { result.total } items ({page} page)
      </div>
      <div>
        { result.news.map(x => <News data={ x } key={ x.news_id } />) }
      </div>
    </div>
  );
}

export default SearchResult;
