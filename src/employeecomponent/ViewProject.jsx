import React from 'react'
import { Link, useParams, navigate, useNavigate } from 'react-router-dom';
import Allservices from '../services/Allservices';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, CssBaseline, Grid, Paper } from '@mui/material';
// import "./Profile.css";
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();
const ViewProject= () => {
    const emp_id = sessionStorage.getItem("emp_id")
    const [project, setProject] = useState();
   
    useEffect(() => {
        Allservices.GetEmpId(emp_id).then((response) => {
            console.log(response.data);
            setProject(response.data);
        });


    }, []);
   
    // Render only if student data is available
    if (!project) {
      return <div>Loading...</div>; // Or some other loading indicator
    }
    return (
        <>
        {/* // <div className='image'>
        //     <div className='container' style={{ paddingTop: 100, marginLeft: 50 }}>
        //         <div className='row'>
        //             <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow color'> */}
                        <h2 className='text-center m-4'>PROJECT</h2>
                        <form onSubmit={onsubmit}>
                            <ThemeProvider theme={defaultTheme}>
                                <Grid container component="main" sx={{ paddingLeft: '15vh', paddingRight:"15vh" }}>
                                    <CssBaseline />
                                    <Grid
                                        item
                                        xs={false}
                                        sm={4}
                                        md={7}
                                        sx={{
                                            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0DMytIfcrljxutyWppIjZmU7smx9bfG9JGw&s)',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundColor: (t) =>
                                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    />
                                    <Grid item xs={10} sm={8} md={5} component={Paper} elevation={6} square>
                                        <Box
                                            sx={{
                                                my: 8,
                                                mx: 4,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        ></Box>
                                        <Grid container spacing={15} paddingLeft={5} >
                                            <Grid item xs={6} marginBottom={10} marginTop={0}>
                                                <h5 style={{ padding: 5 }}> PROJECT  ID</h5>
                                                <h5 style={{ padding: 5 }}> PROJECT TITLE</h5>
                                                <h5 style={{ padding: 5 }}> OBJECTIVES</h5>
                                                <h5 style={{ padding: 5 }}> NO OF PHASES</h5>
                                                <h5 style={{ padding: 5 }}> TIMELINE</h5>
                                                <h5 style={{ padding: 5 }}> BUDGET</h5>
                                                <h5 style={{ padding: 5 }}> RESOUCE ALLOCATION</h5>

                                            </Grid>
                                            <Grid item xs={6}>
                                            
                                                    <div>
                                                <h5 style={{ padding: 5 }}>{`${project.project.project_id} `}</h5>
                                                <h5 style={{ padding: 5 }}> {`${project.project.project_title} `}</h5>
                                                <h5 style={{ padding: 5 }}>{`${project.project.objectives} `}</h5>
                                                <h5 style={{ padding: 5 }}> {`${project.project.no_of_phases} `}</h5>
                                                <h5 style={{ padding: 5 }}> {`${project.project.timeline} `}</h5>
                                                <h5 style={{ padding: 5 }}> {`${project.project.budget} `}</h5>
                                                <h5 style={{ padding: 5 }}> {`${project.project.resource_allocation} `}</h5>
                                                
                                                </div>
                                            </Grid>
                                        </Grid>

                                        <div className="d-flex justify-content-center" style={{ paddingLeft: 30,marginBottom:10 }}>

                                            <Link className='btn btn-danger ' role='backbutton' to={"/empdash/emp_id"} >BACK</Link>



                                        </div>
                                        </Grid>
                                    </Grid>
                            </ThemeProvider>
                        </form>
</>
    )
}

export default ViewProject;