/**
 * REACT BOOTSTRAP
 */
//
// import React, { Component } from 'react';
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
//
// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#brand">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavItem eventKey={1} href="#">
//                 Link
//               </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link
//               </NavItem>
//               <NavDropdown
//                 eventKey={3}
//                 title="Dropdown"
//                 id="basic-nav-dropdown"
//               >
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">
//                 Link Right
//               </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link Right
//               </NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
//
// export default Header;

/**
 * REACT-UI GOOGLE MATERIAL THEME
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  media: {
    height: 800,
    width: '100%',
    background:
      'linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(/img/portfolioHeader.png) no-repeat center center;'
  }
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <CardMedia
        className={classes.media}
        image={classes.background}
        title="Portolio Header"
      />
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
