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
 * [JdCard Component]
 * @extends React
 * @method handleClick [Click event to toggle verticle icon menu]
 * @method handleClose [Allows icon toggle to close]
 * @method handleExpandClick [Event expands dropdown to give description]
 */
class JdCard extends React.Component {
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
            image="/img/jdBanner.png"
            title="JdHillNFL.org"
          />
          <CardContent>
            <Typography variant="title">Catch The Vision Ministries</Typography>
            <Typography variant="subheading">"One Life At A Time"</Typography>
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
                About Catch The Vision Ministries
              </Typography>
              <Typography paragraph variant="p">
                Catch The Vision is an all volunteer 501©3 nonprofit
                organization. Catch The Vision supports the work and mission of
                The Phoenix Dream Center to provide transition housing and life
                skill training to homeless, chemically dependent people by
                supporting their recovery and helping to develop their potential
                to become productive and dignified participants in our
                communities.
              </Typography>
              <Button
                href="/case-studies/jd-hill-ctv"
                className={classes.button}
              >
                Case Study
              </Button>
              <Button
                target="_blank"
                href="https://jdhillnfl.org"
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

JdCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JdCard);
