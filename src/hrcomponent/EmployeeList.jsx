import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";

import Allservices from '../services/Allservices';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EmployeeList() {

    const [employee, setEmployee] = useState({
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
    const [empDetails, setEmpDetails] = useState({});

    const [emp_id, setEmployeeId] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [pan_number, setPanNumber] = useState("");
    const [aadhar_number, setAadharNumber] = useState("");
    const [project_id, setProjectId] = useState("");

    const handleShow = (emp_id, first_name, last_name, email, password, address, city, phone_number, pan_number, aadhar_number, project_id) => {
        setShow(true);
        console.log(first_name)
        setEmployeeId(emp_id);
        setFirstName(first_name);
        setLastName(last_name);
        setEmail(email);
        setPassword(password);
        setAddress(address);
        setCity(city);
        setPhoneNumber(phone_number);
        setPanNumber(pan_number);
        setAadharNumber(aadhar_number);
        setProjectId(project_id);

    };

    const {  project } = employee;
    const handleChange = (e) => {
        if (e.target.name === 'project_id') {
          setEmployee({...employee, project: {...project, project_id: e.target.value } })
        } else {
          setEmployee({...employee, [e.target.name]: e.target.value })
        }
      };
    const [idList, setidList] = React.useState([]);
    

    React.useEffect(() => {
        Allservices.GetId().then((response) => {
            console.log(response.data);
            setidList(response.data);
        });


    }, []);
    const handleClose = () => {
        
          const  indata = {emp_id,first_name,last_name,email,password,address,city,phone_number,pan_number,aadhar_number,
            project:{project_id}}
            Allservices.UpdateEmployee(indata)
              .then(() => {})
              .catch(() => {
                alert("Updation Failure");
              });
    
        setShow(false);
        window.location = "/emplist";
      };
   

    const [search, setSearch] = useState("");


    React.useEffect(() => {
        const getAllDetails = async () => {
            const res = await Allservices.ViewAllEmp();
            setEmpDetails(res.data);
        };
        getAllDetails();
    }, [search]);

    const filteredEmp = Array.isArray(empDetails) ? empDetails.filter((item) => {
        return item && item.first_name && item.first_name.toLowerCase().includes(search.toLowerCase());
    }) : [];

 
    const onInputChange = (e) => {
        setEmpDetails({
            ...empDetails,
            [e.target.name]: e.target.value,
        });
    };
    const [show, setShow] = useState(false);
    const {handleSubmit} = useForm();

    return (
        <div>


            <Modal show={show} onHide={handleClose}>'
            <form>
                <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Employee Id</Form.Label>
                            <Form.Control type="text"  defaultValue={emp_id} disabled
        readOnly
                                onChange={(e) => setEmployeeId(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"  defaultValue={first_name}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"  defaultValue={last_name}
                                onChange={(e) => setLastName(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"  defaultValue={email}
                                onChange={(e) => setEmail(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text"  defaultValue={password}
                                onChange={(e) => setPassword(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"  defaultValue={address}
                                onChange={(e) => setAddress(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" defaultValue={city}
                                onChange={(e) => setCity(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"  defaultValue={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Pan Number</Form.Label>
                            <Form.Control type="text"  defaultValue={pan_number}
                                onChange={(e) => setPanNumber(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Aadhar Number</Form.Label>
                            <Form.Control type="text"  defaultValue={aadhar_number}
                                onChange={(e) => setAadharNumber(e.target.value)}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Project Id</Form.Label>
                            <select
                                            name="project_id"
                                            className="form-control form-control-lg"
                                            value={project.project_id}
                                            onChange={(e) => setProjectId(e.target.value)}
                                            class="form-select"
                                        >
                                            {idList.map((project_id) => (
                                                <option key={project_id} value={project_id}>
                                                    {project_id}
                                                </option>
                                            ))}
                                        </select>
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
            <nav class="navbar navbar-light " style={{ backgroundColor: 'darkblue', paddingBottom: 30 }}>

                <span class="navbar-brand mb-0 h6" style={{ color: 'whitesmoke', paddingLeft: 700, paddingRight: 700, paddingTop: 20, fontSize: "bold" }}>
                    Employee List</span>
            </nav>

            <div className='table' style={{ paddingLeft: 100, paddingTop: 100, paddingRight: 100 }}>
            <div className='button' style={{ paddingLeft: 950, paddingBottom: 50 }}>
                
                <Link to={'/dashboard'} className="btn btn-info btn-md">
                    Back to Dashboard
                </Link>
               
            </div>
                <form class="d-flex justify-content-center" style={{ paddingLeft: 30, paddingRight: 50, paddingBottom: 30 }}>
                    <input class="form-control " type="search" role='search' id='search' placeholder="Enter the First name " aria-label="Search" onChange={(e) => setSearch(e.target.value)} />

                </form>

                <table class="table">
                    <thead>
                        <tr class="font-weight-bold">
                            <th scope="col">Id</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Password</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Pan Number</th>
                            <th scope="col">Aadhar Number</th>
                            <th scope="col">Project Id</th>
                            <th scope="col">Action</th>


                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmp.map((item) => (
                            <tr key={item.emp_id}>
                                <td>{item.emp_id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.pan_number}</td>
                                <td>{item.aadhar_number}</td>
                                <td>{item.project.project_id}</td>
                                
                                    <td className="d-flex justify-content-between" >
                                        <Button className="btn btn-info btn-md" onClick={() => handleShow(item.emp_id, item.first_name, item.last_name, item.email, item.password, item.address, item.city, item.phone_number, item.pan_number, item.aadhar_number,item.project.project_id)} >
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
export default EmployeeList;
