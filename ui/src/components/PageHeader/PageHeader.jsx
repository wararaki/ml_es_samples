import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}));

const PageHeader = () => {
    const classes = useStyles();
    return (
        <div className={ classes.root }>
            <AppBar position="static" color="primary">
                <ToolBar>
                    <Typography variant="h6" className={ classes.title }>
                        News Search
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default PageHeader;
