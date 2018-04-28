import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

// const styles = {
//   row: {
//     display: 'flex',
//     justifyContent: 'center'
//   },
//   avatar: {
//     margin: 10
//   },
//   bigAvatar: {
//     width: 60,
//     height: 60
//   }
// };

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  row: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25
  },
  avatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -40,
    marginBottom: 10,
    display: 'block'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
});

function Testimonials(props) {
  const { classes } = props;
  return (
    <div id="testimonials" className={classes.row}>
      {/* Fuga Energy Testimonial */}
      <Paper className={classes.root} elevation={4}>
        <Avatar
          alt="Miguel, Fuga CEO"
          src="https://www.rcowles.com/wp-content/uploads/2017/07/MiguelProfPic.png"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Typography paragraph variant="p">
          On behalf of Aquarena Worldwide and Fuga Energy we would like to thank
          Ryan Cowles for creating such an amazing website. I would highly
          recommend Ryan to anyone looking for a software developer that speaks
          to anyone on a global scale and is willing to expand their business
          network. Since Ryan created the new website for Fuga Energy we have
          expanded our business on a national level and received business
          opportunities from countries around the world. We truly enjoyed
          working with Ryan and know that he will be a valuable asset to any
          company, not only in software development but any company looking for
          an honest, dependable, and incredibly hard-working individual. Ryan’s
          knowledge speaks volumes of his experience and professionalism. His
          willingness to share his knowledge with others displayed Ryan’s
          ability to be a leader in any company.
          <br />
          <Typography paragraph variant="p">
            For further information please feel to contact me at{' '}
            <a target="_blank" href="https://FugaEnergy.com">
              FugaEnergy.com
            </a>
          </Typography>
          <Typography paragraph variant="p">
            Sincerely,
          </Typography>
          <Typography paragraph variant="p">
            Miguel Camarena
          </Typography>
          <Typography paragraph variant="p">
            Aquarena Worldwide/Fuga Energy
          </Typography>
          <Typography paragraph variant="p">
            President/CEO
          </Typography>
        </Typography>
      </Paper>
    </div>
  );
}

Testimonials.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Testimonials);
