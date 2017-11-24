import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, Typography, Button } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class NavBar extends Component {
    render() {

        const { classes } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        <span>Wallet</span>
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
