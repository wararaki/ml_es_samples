import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  news: {
    margin: '10px 0'
  }
});


const News = (props) => {
  const classes = useStyles();

  return (
    <Card className={ classes.news }>
      <CardContent>
        <h3>{props.data.title}</h3>
        <p>{props.data.datetime}</p>
        <p>{props.data.content}</p>
      </CardContent>
    </Card>
  );
}

export default News;
