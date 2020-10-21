import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    toolbar: {
        height: 32
    },
    title: {
        flexGrow: 1,
        color: '#fff'
    }
}));

const PageHeader = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="fixed" elevation={0}>
                <ToolBar>
                    <Link href="/">
                        <Button component="a">
                            <Typography variant="h6" className={ classes.title }>
                                News Search
                            </Typography>
                        </Button>
                    </Link>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default PageHeader;
