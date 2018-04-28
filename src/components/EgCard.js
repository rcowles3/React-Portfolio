/**
 * IMPORTS
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';

/**
 * Internal CSS to keep components maintained seperately
 */
const styles = theme => ({
  card: {
    flexGrow: 1
  },
  media: {
    height: 194
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    margin: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

/**
 * [EgCard Component]
 * @extends React
 * @method handleClick [Click event to toggle verticle icon menu]
 * @method handleClose [Allows icon toggle to close]
 * @method handleExpandClick [Event expands dropdown to give description]
 */
class EgCard extends React.Component {
  state = {
    expanded: false,
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/img/egBanner.png"
            title="EverythingGoesAz.com"
          />
          <CardContent>
            <Typography variant="title">Everything Goes Az</Typography>
            <Typography variant="subheading">
              "One Of A Kinds, Hard To Finds"
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="title">
                About Everything Goes Az{' '}
              </Typography>
              <Typography paragraph variant="p">
                Since 1995 Everything Goes has been providing customers with
                unique items, great prices and great customer service. With over
                4,000 square feet of shopping space, the store offers home
                furnishings, antiques, collectibles, garden furniture/décor,
                jewelry, one-of-a-kinds and hard-to-find items. The store has
                over 20 vendors each with their own design style making
                Everything Goes a unique shopping experience.
              </Typography>
              <Button
                href="/case-studies/everything-goes-az"
                className={classes.button}
              >
                Case Study
              </Button>
              <Button
                target="_blank"
                href="https://everythinggoesaz.com"
                className={classes.button}
              >
                Website
              </Button>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

EgCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EgCard);
