import React, { useEffect, useState } from "react";
import {
    Button, Container, Card, CardContent, CardMedia, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack, List
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Allservices from "../services/Allservices";


export default function UpdateEmp() {
    const navigate = useNavigate();
const emp_id = sessionStorage.getItem("emp_id")
    const [employee, setEmployee] = useState({});

    


    const handleChange = (e) => {
        setEmployee({...employee, [e.target.name]: e.target.value })
      };

    useEffect(() => {
        Allservices.GetEmpId(emp_id).then((response) => {
            console.log(response.data);
            setEmployee(response.data);
        });


    }, []);

    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(employee);
        await Allservices.UpdateEmployee(employee);
        alert('Data Updated successfully');
        navigate("/profile/:emp_id");
    };
    return (
        <Container >
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                direction="column"
                className="h-100"
            >
                <Grid item xs={16}>
                    <Card className="my-4">
                        <Grid container spacing={2}>
                            <Grid item xs={16} md={6} className="d-none d-md-block">
                                <CardMedia
                                    component="img"
                                    src="https://img.freepik.com/free-vector/cartoon-working-day-scenes-set_23-2148953088.jpg"
                                    alt="Sample photo"
                                    sx={{ width: "100%", height: "80%", marginTop: 0 }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <CardContent className="text-black d-flex flex-column justify-content-center">
                                    <h3 className="mb-10 text-uppercase fw-bold">
                                        Employee registration form
                                    </h3>
                                    <form onSubmit={onsubmit}>
                                    <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={emp_id}
    
                                            onChange={handleChange}
                                        />
                                        <TextField
                                           
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.first_name}
                                            name="first_name"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.last_name}
                                            name="last_name"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            type="email"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            required
                                            name="email"
                                            value={employee.email}
                                        />
                                        <TextField
                                           
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.address}
                                            name="address"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.city}
                                            name="city"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="phone_number"
                                            value={employee.phone_number}
                                            onChange={handleChange}
                                        />


                                        <TextField
                                            
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.pan_number}
                                            name="pan_number"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                           
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.aadhar_number}
                                            name="aadhar_number"
                                            onChange={handleChange}
                                        />
                                         {/* <TextField
                                            label="Project Id"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={employee.project.project_id}
                                            
                                            onChange={handleChange}
                                        /> */}
                                       


                                        <Stack direction="row" justifyContent="flex-end" pt={3}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                onClick={() => navigate("/empdash/emp_id")}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                type="submit"
                                                className="ms-2"
                                                onClick={onsubmit}
                                            >
                                                Submit Form
                                            </Button>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}


