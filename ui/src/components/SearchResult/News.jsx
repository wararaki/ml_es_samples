import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  news: {
    margin: '10px 0'
  },
  text: {
    color: '#6f6f6f',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all'
  }
});


const News = (props) => {
  const classes = useStyles();

  const dt = new Date(Date.parse(props.data.datetime));
  const display_datetime = dt.toISOString().replace('.000Z', '').replace('T', ' ');

  return (
    <Card className={ classes.news }>
      <CardContent>
        <Box component="h3">{props.data.title}</Box>
        <Box component="p">{display_datetime}</Box>
        <Box component="p" className={classes.text}>{props.data.content}</Box>
      </CardContent>
    </Card>
  );
}

export default News;
