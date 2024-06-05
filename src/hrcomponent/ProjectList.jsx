import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Allservices from '../services/Allservices';
// import { Button } from 'bootstrap';

function ProjectList() {
    const [proj, setProj] = React.useState({
        project_id:"",
        project_title: "",
        objectives: "",
        no_of_phases: "",
        timeline: "",
        budget: "",
        resource_allocation: "",
    });

    const [projDetails, setProjDetails] = useState({});

    const [project_id, setProjectId] = useState("");
    const [project_title, setProjectTitle] = useState("");
    const [objectives, setObjectives] = useState("");
    const [no_of_phases, setNoofPhases] = useState("");
    const [timeline, setTimeline] = useState("");
    const [budget, setBudget] = useState("");
    const [resource_allocation, setResource] = useState("");
   

    const handleShow = (project_id, project_title, objectives, no_of_phases, timeline, budget, resource_allocation) => {
        setShow(true);
       
        setProjectId(project_id);
        setProjectTitle(project_title);
        setObjectives(objectives);
        setNoofPhases(no_of_phases);
        setTimeline(timeline);
        setBudget(budget);
        setResource(resource_allocation);
    };

    const handleClose = () => {    
        const  indata = {project_id, project_title, objectives, no_of_phases, timeline, budget, resource_allocation}
          Allservices.UpdateProject(indata)
            .then(() => {})
            .catch(() => {
              alert("Updation Failure");
            });
  
      setShow(false);
      window.location = "/projectlist";
    };

    const [search, setSearch] = useState("");
  

    React.useEffect(() => {
        const getAllDetails = async () => {
            const res = await Allservices.ViewAllProj();
            setProj(res.data);
        };
        getAllDetails();
    }, [search]);

    const filteredProj = Array.isArray(proj) ? proj.filter((item) => {
        return item && item.project_title && item.project_title.toLowerCase().includes(search.toLowerCase());
    }) : [];

    const onInputChange = (e) => {
        setProjDetails({
            ...projDetails,
            [e.target.name]: e.target.value,
        });
    };
    const [show, setShow] = useState(false);
    const {handleSubmit} = useForm();


   
    return (
        <div className='table' >
            
            <Modal show={show} onHide={handleClose}>
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Id</Form.Label>
                                    <Form.Control type="text" defaultValue={project_id}
                                        onChange={(e) => setProjectId(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Title</Form.Label>
                                    <Form.Control type="text" defaultValue={project_title}
                                        onChange={(e) => setProjectTitle(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Objectives</Form.Label>
                                    <Form.Control type="text" defaultValue={objectives}
                                        onChange={(e) => setObjectives(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>No of Phases</Form.Label>
                                    <Form.Control type="text" defaultValue={no_of_phases}
                                        onChange={(e) => setNoofPhases(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Timeline</Form.Label>
                                    <Form.Control type="text" defaultValue={timeline}
                                        onChange={(e) => setTimeline(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Budget</Form.Label>
                                    <Form.Control type="text" defaultValue={budget}
                                        onChange={(e) => setBudget(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Resources</Form.Label>
                                    <Form.Control type="text" defaultValue={resource_allocation}
                                        onChange={(e) => setResource(e.target.value)} />
                                </Form.Group>
                               
                               
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>

                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            <nav class="navbar navbar-light " style={{backgroundColor:'darkblue',paddingBottom:30}}>
                
                <span class="navbar-brand mb-0 h6" style={{color:'whitesmoke',paddingLeft:700,paddingRight:700,paddingTop:10,fontSize:"bold"}}>
                    Project List</span>
            </nav>
            <div className='table' style={{ paddingLeft: 100, paddingTop: 50, paddingRight: 100 }}>
            <div className='button' style={{ paddingLeft: 950, paddingBottom: 50 }}>
                <Link to={'/project'} className="btn btn-info btn-md"  >
                    Add Project
                </Link>
                <Link to={'/dashboard'} className="btn btn-info btn-md">
                    Back to Dashboard
                </Link>
               
            </div>
            <form class="d-flex justify-content-center" style={{ paddingLeft: 30, paddingRight: 800, paddingBottom: 30 }}>
                <input class="form-control " type="search" role='search' id='search' placeholder="Enter the Project Title" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />

            </form>

            <table class="table">
                <thead>
                    <tr class="font-weight-bold">
                        <th scope="col">Project Id</th>
                        <th scope="col">Project Title</th>
                        <th scope="col">Objectives</th>
                        <th scope="col">No of Phases</th>
                        <th scope="col">Timeline</th>
                        <th scope="col">Budget</th>
                        <th scope="col">Resource Allocation</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {filteredProj.map((item) => (
                        <tr key={item.project_id}>
                            <td>{item.project_id}</td>
                            <td>{item.project_title}</td>
                            <td>{item.objectives}</td>
                            <td>{item.no_of_phases}</td>
                            <td>{item.timeline}</td>
                            <td>{item.budget}</td>
                            <td>{item.resource_allocation}</td>


                            <td className="d-flex justify-content-between" >
                                        <Button className="btn btn-info btn-md" onClick={() => handleShow(item.project_id, item.project_title, item.objectives, item.no_of_phases, item.timeline,
                                             item.budget, item.resource_allocation)} >
                                            Update
                                        </Button>
                                    </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
export default ProjectList;
