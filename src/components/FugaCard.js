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
  },
  button: {
    margin: theme.spacing.unit
  }
});

/**
 * [FugaCard Component]
 * @extends React
 * @method handleClick [Click event to toggle verticle icon menu]
 * @method handleClose [Allows icon toggle to close]
 * @method handleExpandClick [Event expands dropdown to give description]
 */
class FugaCard extends React.Component {
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
    // const Website = props => <Link to='/fug'

    return (
      <div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="/img/fugaBanner.png"
            title="FugaEnergy.com"
          />
          <CardContent>
            <Typography variant="title">Fuga Energy</Typography>
            <Typography variant="subheading">
              "Natural Ingredients, Natural Energy"
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
                About Fuga Energy
              </Typography>
              <Typography paragraph variant="p">
                Fuga Energy was created by Miguel Camarena, a former
                professional baseball player and co-founder of Aquarena Beverage
                Company. After having a very negative reaction to a top-selling
                energy drink (where he actually thought he was having a heart
                attack!) he went on a mission to research what happened which
                led to the creation of a healthy energy drink that provides a
                longer lasting boost than coffee and all of the health benefits
                of green tea!
              </Typography>
              <Button
                href="/case-studies/fuga-energy"
                className={classes.button}
              >
                Case Study
              </Button>
              <Button
                target="_blank"
                href="https://fugaenergy.com"
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

FugaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FugaCard);
