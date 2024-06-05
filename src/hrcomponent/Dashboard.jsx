import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../hrcomponent/Dashboard.css";
import Navbar from './Navbar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
 
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
// import Admin from '../components/images/Admin.jpg';
 
export default function Dashboard()  {
   
  return (
    <div>
   
    <div className='sidebar'>
    <div class="container-fixed dashboard" >
    <div class="row flex-nowrap">
        <div class="bg col-md-4 col-lg-4 min-vh-100 color">
            <div class="p-2">
            <a class="d-flex text-decoration-none align-items-center">
            <PersonAddIcon fontSize='large' style={{color:"HighlightText",paddingRight:5}} /><span class="fs-5 d-none d-sm-inline" style={{color:"HighlightText"}}>Admin Panel</span>
            </a>
            <hr style={{color:"white"}}></hr>
            <ul class="nav nav-pills flex-column mt-4">
                <li class="nav-item item">
                <a href="/emplist" class="nav-link text-white" >
                <FormatListNumberedIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Employee List</span>
                </a>
                </li>&nbsp;
 
                <li class="nav-item item">
                <a href="/addemp" class="nav-link text-white" >
                <PersonAddIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Add Employee</span>
                </a>
                </li>&nbsp;
                <li class="nav-item item">
				<a href="/listpayroll" class="nav-link text-white" >
				<AccountBalanceIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Payroll</span>
				</a>
				</li>&nbsp;
                <li class="nav-item item">
                <a href="./projectlist" class="nav-link text-white" >
                <AssignmentIcon fontSize='medium'style={{paddingRight:6}} /><span class="fs-6 d-none d-sm-inline Menu" >Projects</span>
                </a>
                </li>&nbsp;
           
                {/* <li class="nav-item item">
                    <a href="./adminorders" class="nav-link text-white">
                        <LeaderboardIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Performance </span>
                    </a>
                </li> */}
                &nbsp;
               
                <li class="nav-item item">
                    <a href="/" class="nav-link text-white">
                    <LogoutIcon fontSize='medium'style={{paddingRight:6}}/><span class="fs-6 d-none d-sm-inline">Logout</span>
                    </a>
                </li>&nbsp;
            </ul>
        </div>
        </div>
    </div>
    </div>
     <div>
    {/* <h3 style={{textAlign:"center", color:" rgb(66, 66, 126)", marginLeft:"35%",marginTop:-700}} id='dashboard'>Welcome to Admin Panel !</h3>  */}
    <img id='dashboard' src={'https://www.novashrm.org/resource/resmgr/images/mission-and-vision3.png'} alt='admin' className='admin' style={{textAlign:"center", color:" rgb(66, 66, 126)", marginLeft:"35%",marginTop:-600,padding:-100}}></img>
   
    </div>
    </div>
    </div>
   
   
 
  )
};
 