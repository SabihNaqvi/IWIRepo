import {Route,Switch} from 'react-router-dom';
import './App.css';
import forgetPassword from './componenets/ForgetPassword';
import Main from './componenets/Main';
import producerProfile from './componenets/producerProfile';
import ProducerTable from './componenets/ProducerTable';
import Signup from './componenets/Signup';
import Login from './componenets/Login';
import AdvisorProfile from './componenets/AdvisorProfile';
import FieldRecord from './componenets/FieldRecord';
import FieldRecordMgmtZone from './componenets/FieldRecordMgmtZone';
import NewManagmentZone from './componenets/NewManagmentZone';
import Mangement from './componenets/Mangement';
import ProducerFields from './componenets/ProducerFields';
import React from 'react'
import Profile from './componenets/Profile';
import Error from './componenets/Error';
import Home from './componenets/Home';
import ResetPassword from './componenets/ResetPassword';
import AdvisorTable from './componenets/AdvisorTable';
import ProducerIndividual from './componenets/ProducerIndividual';
function App() {
     
    return ( 
    <>
        <Switch>
        <Route  path='/login' component={Login}></Route>
        <Route exact path='/forget-password' component={forgetPassword}></Route>
        <Route exact path='/signups' component={Signup}></Route>
        <Route exact path='/producerprofile' component={producerProfile}></Route>
        <Route exact path='/advisor' component={AdvisorProfile}></Route>
        <Route exact path='/advisortable' component={AdvisorTable}></Route>
        <Route exact path='/producers' component={()=><ProducerTable/>}></Route>
        <Route exact path='/Producerfield' component={ProducerFields}></Route>
        <Route exact path='/fieldrecord' component={FieldRecord}></Route>
        <Route exact path='/fieldrecordmgmtzone' component={FieldRecordMgmtZone}></Route>
        <Route exact path='/newmanagmentzone' component={NewManagmentZone}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/mangement' component={()=>(<Mangement/>)}></Route>
        <Route exact path='/newpassword' component={ResetPassword}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/producerindividual/' component={ProducerIndividual}></Route>
        <Route exact path='/main' component={Main}></Route>
        <Route  path='*' component={Error}></Route>
        </Switch>
    </>
    );
}

export default App;