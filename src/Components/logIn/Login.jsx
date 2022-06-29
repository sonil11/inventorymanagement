import React from 'react';
import { Grid ,Paper,Avatar,TextField,Button,Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';

// import {FormControlLabel} from '@material-ui/core/FormControlLabel';
// import {Checkbox} from '@material-ui/core/Checkbox';
import{ LockOpenIcon} from '@material-ui/icons/LockOpen';
import { Link } from '@mui/icons-material';
const useStyle = makeStyles({
  paperStyle:{
    
    padding:'30x 20px',
   width:300,
     margin:"20px auto"
  }
})
const Login = () => {
  const paperStyle={padding:'30x 20px', width:300, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:'green'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
      <Grid  align='center'>
      <Avatar style={avatarStyle}>
<LockOpenIcon/>
</Avatar>
<h2>Sign In</h2>
      </Grid>
      <TextField id="outlined-basic" label="User Name" variant="User Name" fullwidth required />
      <TextField id="outlined-basic" label="Password" type='password' variant="User Name" fullwidth required />
    
      {/* <FormControlLabel
        control={
          // <Checkbox 
          //   name="checkedB"
          //   color="primary"
          // />
        }
        label="Remember Me"
      /> */}
      <Button type="submit"  variant='contained' style={btnstyle} fullWidth color='primary'>Sign In</Button>
          <Typography>
            <Link href="#" >Forgot Password ?</Link>
          </Typography>
          <Typography>Do you have an account ?
            <Link href="#" > Sign Up ?</Link>
          </Typography>
      </Paper>
    </Grid>
    
  )
}

export default Login