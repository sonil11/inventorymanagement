import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
// import {FormControlLabel} from '@material-ui/core/FormControlLabel';
const useStyle = makeStyles({
  sonil:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  yadav:{
    margin:"2px",
    width:"200px"

  }
})
const Signup = () => {
  const classes = useStyle()
  const paperStyle={padding:'30x 20px', width:400, margin:"20px auto"}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'green'}
  return (
  <Grid className={classes.sonil}>
    <Paper elevation={20} style={paperStyle} >
    <Grid  align='center'>
      <Avatar style={avatarStyle}>
      <AddCircleOutlineOutlinedIcon/>
      </Avatar>
    </Grid>
      <h2 style={headerStyle}>Sign Up</h2>
      <Typography variant='caption'>please fill this form t create account</Typography>
    <form>
      <TextField fullWidth label='First Name'></TextField>
      <TextField fullWidth label='Last Name'></TextField>
      <TextField fullWidth label='Email'></TextField>
      <TextField fullWidth label='Password'></TextField>
      <TextField fullWidth label='Company Name'></TextField>
      {/* <FormControlLabel
        control={<Checkbox  name="checkedA" />}
        label="I accept the terms and conditions."
      /> */}
      <Checkbox name></Checkbox>
      <label>I accept the terms and conditions.</label>
<br></br>

<Button type='signup' variant='contained' color='primary'>SignUp</Button>
    </form>
    </Paper>
  </Grid>
  )
}
    
  
export default Signup;