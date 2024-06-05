import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { useNavigate} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@emotion/react';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LandingPage() {
    
    let navigate = useNavigate();


return (
    <div >
    <ThemeProvider theme={defaultTheme} >
        <Grid container component="main" style={{borderStyle: 'solid',
        borderColor: 'darkblue',
        borderWidth: '10px',padding:68
      }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://www.pockethrms.com/wp-content/uploads/2022/01/Happy-Workforce.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square borderColor={'darkblue'}>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} className='i class="bi bi-person-plus"'>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h4" gutterBottom sx={{ paddingTop: "5vh" }}>
                        Welcome to Project Management!!!
                    </Typography>
                    <Box >


                        <Box className="mt-2 text-dark" sx={{ paddingBottom: "8vh", paddingTop:"7vh", paddingLeft:"10vh" }}>
                            <Typography className="text-center mt-2" variant="h4" gutterBottom sx={{ padding: "9vh",paddingLeft:"1vh",paddingRight:"10vh" }}>
                                
                            </Typography>

                            <Button variant="contained" size="large" onClick={() => navigate("/hr")} sx={{ marginRight: "10vh" }}>
                                HR Login
                            </Button>
                            <Button variant="contained" size="large" onClick={() => navigate("/employee")} sx={{ marginRight: "10vh" }}>
                                Employee Login
                            </Button>
                        </Box>



                    </Box>
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
    </div>
);
                };