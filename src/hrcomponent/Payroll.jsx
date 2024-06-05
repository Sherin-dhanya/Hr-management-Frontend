import React, { useEffect, useState } from "react";
import {
    Button, Container, Card, CardContent, CardMedia, Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Stack
} from "@mui/material";
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import Allservices from "../services/Allservices";
// import { CalendarMonth, Login } from "@mui/icons-material";

export default function Payroll() {
    const navigate = useNavigate();


    const [payroll, setPayroll] = useState({
        payroll_num: "",
        pay_period: "",
        gross_earnings: "",
        deductions: "",
        net_pay: "",
        hours_worked: "",
        overtime_hours: "",
        leave_balances: "",
        emp: {
            emp_id: "",
        }

    });

    const { pay_period, gross_earnings, deductions, net_pay, hours_worked, overtime_hours, leave_balances, emp } = payroll;

    const handleChange = (e) => {
        if (e.target.name === 'emp_id') {
            console.log(e.target.value)
            setPayroll({ ...payroll, emp: { ...emp, emp_id: e.target.value } })
        } else {
            setPayroll({ ...payroll, [e.target.name]: e.target.value })
        }
    };


    const [idList, setidList] = React.useState([]);

    useEffect(() => {
        Allservices.GetIdForPayroll().then((response) => {
            console.log(response.data);
            setidList(response.data);
        });


    }, []);

    const onsubmit = async (e) => {
        e.preventDefault();
        console.log(payroll);

        try {
            await Allservices.InsertPayroll(payroll);
            alert('Data inserted successfully');
            navigate("/listpayroll");
        } catch (error) {
            if (error.response && error.response.status === 500) {
                alert('This Employee have payroll details');
            } else {
                throw error;
            }
        }
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
                                        Payroll form
                                    </h3>

                                    <form onSubmit={onsubmit}>
                                       
                                            
                                           <select
                                            name="emp_id"
                                            className="form-control form-control-lg"
                                            value={emp.emp_id}
                                            onChange={handleChange}
                                            class="form-select"
                                        >
                                            {idList.map((emp_id) => (
                                                <option key={emp_id} value={emp_id}>
                                                    {emp_id}
                                                </option>
                                            ))}
                                        </select> 
                                       
                                        <TextField
                                            label="Payroll Period"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="pay_period"
                                            value={pay_period}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Gross Earnings"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="gross_earnings"
                                            value={gross_earnings}
                                            onChange={handleChange}
                                        />
                                        <TextField
                                            label="Deductions"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="deductions"
                                            onChange={handleChange}
                                            value={deductions}

                                        />

                                        <TextField
                                            label="Net Pay"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="net_pay"
                                            value={net_pay}
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            label="Hours Worked"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="hours_worked"
                                            value={hours_worked}
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            label="Overtime Hours"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            name="overtime_hours"
                                            value={overtime_hours}
                                            onChange={handleChange}

                                        />
                                        <TextField
                                            label="Leave balances"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            margin="normal"
                                            required
                                            value={leave_balances}
                                            name="leave_balances"
                                            onChange={handleChange}
                                        />

                                        <Stack direction="row" justifyContent="flex-end" pt={3}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                size="large"
                                                onClick={() => navigate("/listpayroll")}
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
            </Grid>
        </Container>
    );
}

