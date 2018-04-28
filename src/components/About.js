import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  row: {
    padding: 25
  },
  card: {
    flexGrow: 1
  },
  media: {
    height: 200
  }
});

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div id="about-me" className={classes.row}>
      <Paper className={classes.root} elevation={4}>
        <Typography paragraph variant="display3">
          About Me
        </Typography>
        <Typography paragraph variant="p">
          Graduated with a Bachelor’s of Science in Computer Information Systems
          at The W.A. Franke College of Business, Northern Arizona University. I
          am always looking opportunities to complement, and grow my skills and
          knowledge within the software development industry. After graduating,
          I was employed by GoDaddy as a Hosting Support Consultant, working
          with customers and their website server issues. Being a full time
          employee at GoDaddy really opened my eyes as to how immense and
          insecure the internet really is. With time, I became familiar with how
          web servers and websites worked, as well as how to troubleshoot issues
          within each environment. It was working in this environment that led
          to me developing a few websites of my own, which ultimately led to
          pursuing Web Development as a career. Recently, I’ve completed a Full
          Stack Coding Bootcamp, through the University of Arizona. Through the
          program I have become familiar with several mainstream programming
          languages, principles and software. My goal is to continue to develop
          new skills through online courses like Udemy, while toning my current,
          ultimately obtaining a career in Web Development professionally.
        </Typography>
      </Paper>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
