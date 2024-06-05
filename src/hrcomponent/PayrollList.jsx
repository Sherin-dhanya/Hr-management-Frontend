import * as React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Allservices from '../services/Allservices';

function PayrollList() {
    const [pay, setPay] = React.useState({
        payroll_num: "",
        pay_period: "",
        gross_earnings: "",
        deductions: "",
        net_pay: "",
        hours_worked: "",
        overtime_hours: "",
        leave_balances: "",
        emp: {
            emp_id: ""
        }
    });
    const [payDetails, setPayDetails] = useState({});

    const [payroll_num, setPayrollnum] = useState("");
    const [pay_period, setPayperiod] = useState("");
    const [gross_earnings, setGross] = useState("");
    const [deductions, setDeductions] = useState("");
    const [net_pay, setNetpay] = useState("");
    const [hours_worked, setHoursWorked] = useState("");
    const [overtime_hours, setOvertime] = useState("");
    const [leave_balances, setLeave] = useState("");
    const [emp_id, setEmpId] = useState("");

    const handleShow = (payroll_num, pay_period, gross_earnings, deductions, net_pay, hours_worked, overtime_hours, leave_balances, emp_id) => {
        setShow(true);
       
        setPayrollnum(payroll_num);
        setPayperiod(pay_period);
        setGross(gross_earnings);
        setDeductions(deductions);
        setNetpay(net_pay);
        setHoursWorked(hours_worked);
        setOvertime(overtime_hours);
        setLeave(leave_balances);
        setEmpId(emp_id);
        

    };
    const handleClose = () => {
        
        const  indata = {payroll_num, pay_period, gross_earnings, deductions, net_pay, hours_worked, overtime_hours, leave_balances, 
          emp:{emp_id}}
          Allservices.UpdatePayroll(indata)
            .then(() => {})
            .catch(() => {
              alert("Updation Failure");
            });
  
            
      setShow(false);
      window.location = "/listpayroll";
    };

    const [search, setSearch] = useState("");


    React.useEffect(() => {
        const getAllDetails = async () => {
            const res = await Allservices.ViewAllPayroll();
            setPay(res.data);
        };
        getAllDetails();
    }, [search]);

    const filteredEmp = Array.isArray(pay) ? pay.filter((item) => {
        return item && item.pay_period && item.pay_period.toLowerCase().includes(search.toLowerCase());
    }) : [];

    const onInputChange = (e) => {
        setPayDetails({
            ...payDetails,
            [e.target.name]: e.target.value,
        });
    };
    const [show, setShow] = useState(false);
    const {handleSubmit} = useForm();


    return (
        <div className='table'>
            <div>


                <Modal show={show} onHide={handleClose}>'
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Payroll Number</Form.Label>
                                    <Form.Control type="text" defaultValue={payroll_num}
                                        onChange={(e) => setPayrollnum(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Payroll Period</Form.Label>
                                    <Form.Control type="text" defaultValue={pay_period}
                                        onChange={(e) => setPayperiod(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Gross Earnings</Form.Label>
                                    <Form.Control type="text" defaultValue={gross_earnings}
                                        onChange={(e) => setGross(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Deductions</Form.Label>
                                    <Form.Control type="text" defaultValue={deductions}
                                        onChange={(e) => setDeductions(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Net Pay</Form.Label>
                                    <Form.Control type="text" defaultValue={net_pay}
                                        onChange={(e) => setNetpay(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Hours Worked</Form.Label>
                                    <Form.Control type="text" defaultValue={hours_worked}
                                        onChange={(e) => setHoursWorked(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Overtime Worked</Form.Label>
                                    <Form.Control type="text" defaultValue={overtime_hours}
                                        onChange={(e) => setOvertime(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Leave Balance</Form.Label>
                                    <Form.Control type="text" defaultValue={leave_balances}
                                        onChange={(e) => setLeave(e.target.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Employee Id</Form.Label>
                                    <Form.Control type="text" defaultValue={emp_id}
                                        onChange={(e) => setEmpId(e.target.value)} />
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

                    <span class="navbar-brand mb-0 h6" style={{ color: 'whitesmoke', paddingLeft: 700, paddingRight: 700, paddingTop: 10, fontSize: "bold" }}>
                        Employee List</span>
                </nav>
                <div className='table' style={{ paddingLeft: 100, paddingTop: 60, paddingRight: 100 }}>
                    <div className='button' style={{ paddingLeft: 950, paddingBottom: 50 }}>
                        <Link to={'/payroll'} className="btn btn-info btn-md"  >
                            Add Payroll
                        </Link>
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
                                <th scope="col">PAYROLL NUMBER</th>
                                <th scope="col">PAY PERIOD</th>
                                <th scope="col">GROSS EARNINGS</th>
                                <th scope="col">DEDUCTONS</th>
                                <th scope="col">NET PAY</th>
                                <th scope="col">HOURS WORKED</th>
                                <th scope="col">OVERTIME HOURS</th>
                                <th scope="col">LEAVE BALANCE</th>
                                <th scope="col">EMPLOYEE ID</th>


                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmp.map((item) => (
                                <tr key={item.payroll_num}>
                                    <td>{item.payroll_num}</td>
                                    <td>{item.pay_period}</td>
                                    <td>{item.gross_earnings}</td>
                                    <td>{item.deductions}</td>
                                    <td>{item.net_pay}</td>
                                    <td>{item.hours_worked}</td>
                                    <td>{item.overtime_hours}</td>
                                    <td>{item.leave_balances}</td>
                                    <td>{item.emp.emp_id}</td>

                                    <td className="d-flex justify-content-between" >
                                        <Button className="btn btn-info btn-md" onClick={() => handleShow(item.payroll_num, item.pay_period, item.gross_earnings, item.deductions, item.net_pay,
                                             item.hours_worked, item.overtime_hours, item.leave_balances, item.emp.emp_id)} >
                                            Update
                                        </Button>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            );
}
            export default PayrollList;
