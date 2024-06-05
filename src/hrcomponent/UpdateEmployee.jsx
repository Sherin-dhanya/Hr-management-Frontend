import React, { useEffect, useState } from "react";
// import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
// import Allservices from "../services/Allservices";
import { Button, Container, Card, CardContent, CardMedia, Grid, TextField, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function UpdateEmployee() {

    let navigate = useNavigate();
    const [Employee, setEmployee] = useState({
        emp_id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        address: "",
        city: "",
        phone_number: "",
        pan_number: "",
        aadhar_number: "",
        project: {
            project_id: "",
        }
    });
    const { first_name, last_name, email, password, address, city, phone_number, pan_number, aadhar_number, project_id } = Employee;



    // const handleFetch = async (id) => {
    //     try {
    //         const response = await axios.get(`http://localhost:2666/getEmpById/${id}`);
    //         setEmployee(response.data);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     handleFetch(emp_id);
    // }, []);
    const onInputChange = (e) => {
        setEmployee({ ...Employee, [e.target.name]: e.target.value });
    };
    // const [emp_id, setEmpId] = useState("");
    // const [idList, setidList] = React.useState([]);

   
    const onSubmit1 = async (e) => {
        e.preventDefault();
        await axios.put("http://localhost:2666/updateEmp", Employee)
        alert('Employee Details Updated Successfully');
        navigate("/EditUser");
     
    };
    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" direction="column" className="h-100">
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
                                    <h3 className="mb-10 text-uppercase fw-bold">Update Employee form</h3>
                                    <form onSubmit={onSubmit1}>


                                        <TextField
                                            label="First Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            value={first_name}
                                            name="first_name"
                                            onChange={(e) => onInputChange(e)}
                                        />

                                        <TextField
                                            label="Last Name"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={last_name}
                                            name="last_name"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <TextField
                                            label="Email ID"
                                            variant="outlined"
                                            size="small"
                                            type="email"
                                            fullWidth
                                            margin="normal"
                                            onChange={(e) => onInputChange(e)}

                                            name="email_id"
                                            value={email}
                                        />
                                        <TextField
                                            label="Password"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={password}
                                            name="password"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <TextField
                                            label="Address"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={address}
                                            name="address"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <TextField
                                            label="City"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={city}
                                            name="city"
                                            onChange={(e) => onInputChange(e)}
                                        />

                                        <TextField
                                            label="Phone Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            name="phone_number"
                                            value={phone_number}
                                            onChange={(e) => onInputChange(e)}
                                        />


                                        <TextField
                                            label="PAN Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={pan_number}
                                            name="pan_number"
                                            onChange={(e) => onInputChange(e)}
                                        />

                                        <TextField
                                            label="Aadhar Number"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={aadhar_number}
                                            name="aadhar_number"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <TextField
                                            label="Project Id"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"

                                            value={project_id}
                                            name="project_id"
                                            onChange={(e) => onInputChange(e)}
                                        />


                                        <Stack direction="row" justifyContent="flex-end" pt={3}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                onClick={() => navigate("/dashboard")}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                className="ms-2"
                                                type="submit"
                                            >
                                                Submit form
                                            </Button>
                                        </Stack>
                                    </form>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid >
        </Container >
    )
}


