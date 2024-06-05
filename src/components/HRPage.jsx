import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from "react-router-dom";
import Allservices from '../services/Allservices';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function HRPage() {
  const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    

    const [login, setLogin] = React.useState({

        email: "",
        password: "",
    });
    const { email, password } = login;
    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        let formValid = true;
 
        // Validate email
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setEmailError("Please enter a valid email address");
            formValid = false;
        } else {
            setEmailError("");
        }
 
        // Validate password
        if (!password || password.length < 8) {
            setPasswordError("Please enter a password with at least 8 characters.");
            formValid = false;
        } else {
            setPasswordError("");
        }
 
        Allservices.LoginValue(email).then((res) => {
            setLogin(res);

            if (res.data.password === login.password) {
                alert("Login Success");
                navigate("/dashboard");

            } else {
                alert("Username and Password  is not match");
            }


        })

    };
  let navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" style={{borderStyle: 'solid',
        borderColor: 'darkblue',
        borderWidth: '10px',padding:74
      }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://us.123rf.com/450wm/ilusikustudio/ilusikustudio2308/ilusikustudio230800309/213567838-human-resources-recruitment-employee-division-vector-illustration.jpg?ver=6)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 10 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                autoFocus
                error={!!emailError}
                                helperText={emailError}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
                error={!!passwordError}
                                helperText={passwordError}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                Sign In
              </Button>
              
             
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}