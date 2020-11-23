import News from './News';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
    <Box>
      <Box className={ classes.total }>
        { result.total } items ({page} page)
      </Box>
      <Box>
        { result.news.map(x => <News data={ x } key={ x.news_id } />) }
      </Box>
    </Box>
  );
}

export default SearchResult;
