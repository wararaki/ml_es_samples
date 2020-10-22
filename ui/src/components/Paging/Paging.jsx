import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  paging: {
    marginBottom: 10
  }
}));

const Paging = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const { query, page, total, limit } = props;
  const iPage = parseInt(page);
  const isPrevDisable = iPage <= 1;
  const isNextDisable = iPage*limit >= total;

  const search = (movePage) => {
    const params = {q: query, page: movePage};
    const url = {pathname: '/search?q=[q]&page=[page]', query: params};
    const urlAs = {pathname: '/search', query: params};

    router.push(url, urlAs);
  }

  return (
    <div className={ classes.paging }>
      <Button disabled={ isPrevDisable } onClick={ () => search(iPage-1) }>Prev</Button>
      <Button disabled={ isNextDisable } onClick={ () => search(iPage+1) }>Next</Button>
    </div>
  );
};

export default Paging;
