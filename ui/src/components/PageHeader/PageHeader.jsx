import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {},
    toolbar: {
        height: 64
    },
    title: {
        flexGrow: 1
    }
}));

const PageHeader = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar position="static" elevation={0}>
                <ToolBar>
                    <Typography variant="h6" className={ classes.title }>
                        News Search
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default PageHeader;
