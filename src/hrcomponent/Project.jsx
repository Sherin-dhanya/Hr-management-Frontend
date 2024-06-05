import React from "react";
import {
    Button, Container, Card, CardContent, CardMedia, Grid, TextField, Stack
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Allservices from "../services/Allservices";

export default function Project() {
    
    const navigate = useNavigate();

    const [project, setProject] = React.useState({
        project_title: "",
        objectives: "",
        no_of_phases: "",
        timeline: "",
        budget: "",
        resource_allocation: "",
        
    });
    const { project_title,
        objectives,
        no_of_phases,
        timeline,
        budget,
        resource_allocation } = project;

    const handleChange = (e) => {
        if (e.target.name === 'id') {
            setProject({ ...project, employee: { emp_id: e.target.value } })
        }
        else {
            setProject({ ...project, [e.target.name]: e.target.value });
        }
    };
    // const[idList,setidList]=React.useState([]);

    // useEffect(() =>{
    //   Allservices.FindAllId().then((response)=>{
    //   console.log(response.data);
    //   setidList(response.data);});


    // },[]);


    const onsubmit = async (e) => {
        e.preventDefault();
        await Allservices.InsertProject(project);
        alert('Data inserted successfully');
        navigate("/projectlist");
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
                                    sx={{ width: "100%", height: "100%" }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <CardContent className="text-black d-flex flex-column justify-content-center">
                                    <h3 className="mb-10 text-uppercase fw-bold">
                                        Project Allocation form
                                    </h3>
                                    <form onSubmit={onsubmit}>
                                        <TextField
                                            label="Project Title"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="project_title" 
                                            value={project_title}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Objectives"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="objectives"
                                            value={objectives}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="No of Phases"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="no_of_phases"
                                            value={no_of_phases}
                                            onChange={handleChange}
                                        />

                                        <TextField
                                            label="Timeline"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="timeline"
                                            value={timeline}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Budget"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="budget"
                                            value={budget}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Resource Allocation"
                                            variant="outlined"
                                            size="large"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="resource_allocation"
                                            value={resource_allocation}
                                            onChange={handleChange}
                                        />
                                        <Stack direction="row" justifyContent="flex-end" pt={3}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                onClick={() => navigate("/projectlist")}
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
                                                Submit 
                                            </Button>  </Stack>
                                    </form>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

