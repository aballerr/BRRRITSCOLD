import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  position: relative;
  right: 0;
  float: right;
  margin-right: 20px;
`;

const styles = {
  root: {
    flexGrow: 1,
    height: 100,
  },
  appBar: {
    position: 'relative',
    backgroundColor: '#424242',
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar className={classes.appBar}>
          <div style={{ flexGrow: 1 }} />
          <Link href="/properties">
            <Typography variant="h6" color="inherit">
              Properties
            </Typography>
          </Link>
          <Link href="/calculator">
            <Typography variant="h6" color="inherit">
              Calculator
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);
