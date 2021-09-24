import React from 'react';
import jwt from 'jsonwebtoken';
import Main from './Main';
const Mangement = () => {
    const token = localStorage.getItem("token");
    if(!token || token === 'undefined') {window.location = '/login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = '/login'}}
    return (
        <>
        <Main/>
            <div className="container-fluid gradient-custom vh-100">
                <div className="row">
                    <div className="col-sm-12">
                    <h1 className="justify-content-center align-items-center">IWI</h1>
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
                            <div className="col-2">
                                <input className="text-primary form-control" type="date"/>
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
                            <div className="row mt-4">
                            <div className="col-2" style={{marginLeft:'50%'}}>
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className="form-group" style={{marginTop:'70%'}}>
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Mangement
