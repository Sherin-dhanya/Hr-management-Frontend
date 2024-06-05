import React, { useEffect, useState } from "react";
import {
    Button, Container, Card, CardContent, CardMedia, Grid, TextField, Stack, InputLabel, FormControl,} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Allservices from "../services/Allservices";
import Select from '@mui/material/Select';

export default function AddEmployee() {
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        emp_id: "",
        first_name: "",
        last_name: "",
        email: "",  
        password:"",
        address: "",
        city: "",
        phone_number: "",
        pan_number: "",
        aadhar_number: "",
        project: {
            project_id: "",
        }

    });
    const { first_name, last_name, email, password, address, city, phone_number, pan_number, aadhar_number, project } = employee;
    // const{project_id}=project;

    // const [successMessage, setSuccessMessage] = useState("");


    const handleChange = (e) => {
        if (e.target.name === 'project_id') {
          setEmployee({...employee, project: {...project, project_id: e.target.value } })
        } else {
          setEmployee({...employee, [e.target.name]: e.target.value })
        }
      };

    const [idList, setidList] = React.useState([]);

    useEffect(() => {
        Allservices.GetId().then((response) => {
            console.log(response.data);
            setidList(response.data);
        });


    }, []);

    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(employee);

        await Allservices.InsertEmp(employee);
        alert('Data inserted successfully');
        navigate("/emplist");
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
                                    sx={{ width: "100%", height: "85%", marginTop: 0 }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <CardContent className="text-black d-flex flex-column justify-content-center">
                                    <h3 className="mb-10 text-uppercase fw-bold">
                                        Employee registration form
                                    </h3>
                                    <form onSubmit={onsubmit}>
                                    
                                        <TextField
                                            label="First Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={first_name}
                                            name="first_name"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Last Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={last_name}
                                            name="last_name"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Email ID"
                                            variant="outlined"
                                            size="small"
                                            type="email"
                                            fullWidth
                                            margin="normal"
                                            onChange={handleChange}
                                            required
                                            name="email"
                                            value={email}
                                        />
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={password}
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Address"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={address}
                                            name="address"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="City"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={city}
                                            name="city"
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="phone_number"
                                            value={phone_number}
                                            onChange={handleChange}
                                        />


                                        <TextField
                                            label="PAN Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={pan_number}
                                            name="pan_number"
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Aadhar Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={aadhar_number}
                                            name="aadhar_number"
                                            onChange={handleChange}
                                        />
                                       <select
                                            name="project_id"
                                            className="form-control form-control-lg"
                                            value={project.project_id}
                                            onChange={handleChange}
                                            class="form-select"
                                        >
                                            {idList.map((project_id) => (
                                                <option key={project_id} value={project_id}>
                                                    {project_id}
                                                </option>
                                            ))}
                                        </select> 
                                        <Stack direction="row" justifyContent="flex-end" pt={3}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                className="ms-2"
                                              type="submit"
                                            >
                                                Add
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


