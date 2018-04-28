/**
 * IMPORTS
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

/**
 * Project Components
 */
import FugaCard from './FugaCard';
import JdCard from './JdCard';
import EgCard from './EgCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 25
  },
  card: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class Projects extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="recent-work" className={classes.root}>
        <Typography paragraph variant="display3">
          Recent Work
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <FugaCard className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <JdCard className={classes.card} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <EgCard className={classes.card} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Projects);
