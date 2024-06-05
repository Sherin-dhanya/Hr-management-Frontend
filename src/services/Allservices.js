import { Component } from "react";
import axios from "axios"

const viewAllEmp="http://localhost:2666/viewemp";
const insertEmp="http://localhost:2666/insertEmp";
const getId="http://localhost:2666/getbyid";
const updateEmp="http://localhost:2666/updateEmp/";
const getEmpbyId="http://localhost:2666/getEmpById/";

const insertProj="http://localhost:2666/insertProject";
const viewAllProj="http://localhost:2666/viewallproj";
const updateProj="http://localhost:2666/updateproject/";

const getProfileById="http://localhost:2666/search/";
const loginValue="http://localhost:2666/GetValueByAdmin/";

const viewAllPayroll="http://localhost:2666/viewallPay";
const insertPayroll="http://localhost:2666/insertpayroll";
const getIdForPayroll="http://localhost:2666/getbyidforpay";
const viewPayrollById="http://localhost:2666/payroll/";
const updatePayroll="http://localhost:2666/updatepayroll/";

const empLogin="http://localhost:2666/GetValue/";
class Allservices extends Component {

   
    ViewAllEmp=()=>{
        return axios.get(viewAllEmp);
    }
    InsertEmp(emp){
        return axios.post(insertEmp,emp);
    }
    GetEmpId=(emp_id)=>{
        return axios.get(getEmpbyId+emp_id);
    }
    InsertProject(project){
        return axios.post(insertProj, project);
    }
    ViewAllProj=()=>{
        return axios.get(viewAllProj);
    }
    GetId(){
        return axios.get(getId);
    }
    FindProfileId(employeeData){
        return axios.get(getProfileById+employeeData);
    }
    LoginValue(email){
        return axios.get(loginValue+email);
    }
    ViewAllPayroll=()=>{
        return axios.get(viewAllPayroll);
    }
 InsertPayroll(payroll){
    return axios.post(insertPayroll, payroll);
}
GetIdForPayroll(){
    return axios.get(getIdForPayroll);
}
ViewPayrollById=(emp_id)=>{
    return axios.get(viewPayrollById+emp_id);
}

EmpLogin(email){
    return axios.get(empLogin+email);
}
UpdateEmployee(emp){
    const emp_id = emp.emp_id
    return axios.put(updateEmp+emp_id,emp);
}
UpdatePayroll(pay){
    const payroll_num = pay.payroll_num
    return axios.put(updatePayroll+payroll_num,pay);
}
UpdateProject(proj){
    const project_id = proj.project_id
    return axios.put(updateProj+project_id,proj);
}
}
  export default new Allservices();