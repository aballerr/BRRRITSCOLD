import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = () => ({
  root: {
    marginRight: 10,
  },
  percent: {
    maxWidth: 150,
  },
});

const CustomTextField = ({ classes, onChange, label, value, adornmentType }) => {
  if (adornmentType === '$') {
    return (
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        className={classes.root}
        label={label}
        value={value}
        onChange={onChange}
      />
    );
  } else if (adornmentType === '%') {
    return (
      <TextField
        InputProps={{
          endAdornment: <InputAdornment position="start">%</InputAdornment>,
        }}
        className={classes.root}
        label={label}
        value={value}
        onChange={onChange}
      />
      // <FormControl className={classes.percent}>
      //   <InputLabel htmlFor="adornment-password">Password</InputLabel>
      //   <Input id="adornment-password" value={value} onChange={onChange} endAdornment={<InputAdornment position="end">$</InputAdornment>} />
      // </FormControl>
    );
  }
  return <TextField className={classes.root} label={label} value={value} onChange={onChange} />;
};

export default withStyles(styles)(CustomTextField);
