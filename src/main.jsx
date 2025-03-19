import { Fragment, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Application from './components/applicantprofile/Application.jsx'
import Curd from './components/applicantprofile/Curd.jsx';
import LoginForm from './components/applicantprofile/LoginForm.jsx'
import SalesData from './components/franchise-dashboard/Sales/SalesData.jsx'
import Sidebar from './components/franchise-dashboard/Sidebar.jsx'
import Dashboard from './components/franchise-dashboard/Dashboard.jsx'
import Adminside from '../Adminside.jsx'
import FranchiseHub from './components/index-page/FranchiseApplicationWebsite.jsx'



let root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Fragment>
    {/* <Curd></Curd> */}
    <App></App>
    {/* <FranchiseHub></FranchiseHub> */}
    {/* <LoginForm>/</LoginForm> */}
    {/* <SalesData></SalesData> */}
    {/* <Sidebar></Sidebar> */}
    {/* <Dashboard></Dashboard> */}
    {/* <Adminside></Adminside> */}

    {/* <Application></Application> */}
 
  
</Fragment>)
