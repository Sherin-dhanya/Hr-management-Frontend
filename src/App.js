
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './hrcomponent/AddEmployee';

import HRPage from './components/HRPage';
import LandingPage from './components/LandingPage';
import EmployeePage from './components/EmployeePage';
import Dashboard from './hrcomponent/Dashboard';
import EmployeeList from './hrcomponent/EmployeeList';
import UpdateEmployee from './hrcomponent/UpdateEmployee';
import Project from './hrcomponent/Project';
import Payroll from './hrcomponent/Payroll';
import ProjectList from './hrcomponent/ProjectList';
import EmpDashboard from './employeecomponent/EmpDashboard';
import Profile from './employeecomponent/Profile';
import ViewPayroll from './employeecomponent/ViewPayroll';
import PayrollList from './hrcomponent/PayrollList';
import UpdateEmp from './employeecomponent/UpdateEmp';
import ViewProject from './employeecomponent/ViewProject';




function App() {
  return (
   
    <Router >
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/hr" element={<HRPage/>} />
      <Route path="/employee" element={<EmployeePage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/emplist" element={<EmployeeList/>} />
      <Route path="/addemp" element={<AddEmployee/>} />
      <Route path="/updateemp" element={<UpdateEmployee/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/payroll" element={<Payroll/>} />
      <Route path="/projectlist" element={<ProjectList/>} />
      <Route path="/empdash/:emp_id" element={<EmpDashboard/>} />
      <Route path="/profile/:emp_id" element={<Profile/>} />
      <Route path="/viewpayroll/:emp_id" element={<ViewPayroll/>} />
      <Route path="/listpayroll" element={<PayrollList/>} />
      <Route path="/empupdate/:emp_id" element={<UpdateEmp/>} />
      <Route path="/viewproject/:emp_id" element={<ViewProject/>} />

    </Routes>
    
  </Router>
    
  );
}

export default App;
