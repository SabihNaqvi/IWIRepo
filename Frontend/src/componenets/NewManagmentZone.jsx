import React from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import jwt from 'jsonwebtoken';
import Main from './Main';
const NewManagmentZone = () => {
    const token = localStorage.getItem("token");
  if(!token || token === 'undefined') {window.location = '/login'}
  else {const {user} = jwt.verify(token,"randomString")
  if(!user?.id) { window.location = '/login'}}
    return (
        <>
        <Main/>
            <div className="container-fluid gradient-custom vh-100" style={{border: "2px solid black"}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row pt-5">
                            <div className="col-2"></div>
                            <div className="col-5">
                            <label>Production Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Field"/>
                                </div>
                            </div>
                            <div className="col-1">
                                <input className="text-white form-control bg-primary" type="number" min="1900" max="2099" step="1"/>
                            </div>
                            <div className="col-1 gx-0">
                            <CalendarTodayIcon/>
                            </div>
                        </div>


                        <div className="row pt-5">
                            <div className="col-2">
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-2">
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-2">
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Cover Crop
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row" style={{marginTop:"15%"}}>
                            <div className="col-6">
                            <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Interested in Structural Practice?
                                    </label>
                                </div>
                            </div>
                            <div className="col-3">
                            <div className="form-group" >
                                <select className="custom-select form-control" id="inputGroupSelect02"  style={{width:'80%'}}>
                                    <option selected>Reason for structural Practice</option>
                                    <option value="1">Reduce Soil Movement</option>
                                    <option value="2">Trap Moving Soil</option>
                                    <option value="4">Reduce Run off</option>
                                    <option value="5">Convey Water Downstream</option>
                                    <option value="6">Improve Drainage</option>
                                </select>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"10%"}}>
                            <div className="col-5">

                            </div>
                            <div className="col-2 mb-2">
                            <button className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-5">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default NewManagmentZone
