import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Badge, Nav, Navbar, NavbarBrand} from 'react-bootstrap'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
const Header = () => {
    const classes = useStyles();
    return(
  <header fluid={"md"}>
      <div className="row">

              <h1 className="col align-self-center">
              Expensify <Badge variant="secondary">New</Badge>
             </h1>

      </div>

      <Navbar bg="primary" variant="dark">
          <Navbar.Brand className={"font-weight-bold"}>Expensify</Navbar.Brand>
          <Nav className="mr-auto">
              <Nav.Link >
                  <NavLink  className={'navLinks text-decoration-none'} to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                 </Nav.Link>
              <Nav.Link >
                  <NavLink  className={'navLinks text-decoration-none'} to="/create" activeClassName="is-active">Create Expense</NavLink>
              </Nav.Link>
              <Nav.Link >
                  <NavLink  className={'navLinks text-decoration-none'} to="/help" activeClassName="is-active">Help</NavLink>
              </Nav.Link>
          </Nav>

      </Navbar>



      {/*<div className={classes.root}>*/}
      {/*    <AppBar position="static">*/}
      {/*        <Toolbar>*/}
      {/*           <Typography variant="h6" className={classes.title}>*/}
      {/*                <NavLink  className={'navLinks'} to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>*/}
      {/*                <NavLink  className={'navLinks'} to="/create" activeClassName="is-active">Create Expense</NavLink>*/}
      {/*                <NavLink  className={'navLinks'} to="/help" activeClassName="is-active">Help</NavLink>*/}

      {/*            </Typography>*/}
      {/*            /!*<Button color="inherit">Login</Button>*!/*/}
      {/*        </Toolbar>*/}
      {/*    </AppBar>*/}
      {/*</div>*/}

  </header>
);}
console.log("From Header");

export default Header;
