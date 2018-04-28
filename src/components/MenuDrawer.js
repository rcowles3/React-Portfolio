import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import MenuIcon from '@material-ui/icons/Menu';
import About from './About';

const styles = theme => ({
  list: {
    // textAlign: 'center',
    // width: '100%',
    // maxWidth: 500,
    // backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  drawer: {
    width: 250,
    texcolor: 'red',
    textAlign: 'center'
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List component="nav">
          <Divider />
          <ListItem button component="a" href="/#about-me">
            <ListItemText inset primary="About" />
          </ListItem>
          <Divider />
          <ListItem button component="a" href="/#recent-work">
            <ListItemText inset primary="Recent Work" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText inset primary="Projects" />
          </ListItem>
          <Divider />
          <ListItem button component="a" href="/#testimonials">
            <ListItemText inset primary="Testimonials" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText inset primary="Contact" />
          </ListItem>
          <Divider />
        </List>
      </div>
    );

    return (
      <div>
        <MenuIcon onClick={this.toggleDrawer('left', true)} />
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div
            className={classes.drawer}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
