import React from 'react';
import jwt from 'jsonwebtoken';
import Main from './Main';
import { Link } from 'react-router-dom';
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
                                <select className="custom-select form-control" id="inputGroupSelect01" placeholder="Field">
                                <option selected>Field</option>
                                <option>1612351-1(Old 40)</option>
                                <option>1612351-2(New W 40)</option>
                                <option>1612351-2(Farmyard)</option>
                                        </select>
                                        </div>
                            </div>
                            <div className="col-2">
                                <input className="text-primary form-control" type="date"/>
                            </div>
                        </div>


                        <div className="row pt-5">
                            <div className="col-2">
                            <select className="custom-select form-control" id="inputGroupSelect01" placeholder="Field">
                            <option selected>Choose...</option>
                            <b><option>Alfalfa</option></b>
                            <option>Alfala</option>
                            <option>Brome</option>
                            <li className="divider"></li>
                            <b><option>Beans</option></b>
                            <option>pinto</option>
                            <option>pinto wide row</option>
                            <b><option>Corn</option></b>
                            <option>Grain</option>
                            <option>Grain,narrow row</option>
                            <option>Seed</option>
                            <option>Silage</option>
                            <option>Forage sorghum</option>
                            <option>Oats</option>
                            <option>Rye</option>
                            <option>Ryegrass</option>
                            <b><option>Soybeans</option></b>
                            <option>Wide row</option>
                            <option>Narrow row</option>
                            <option>Spring Barley</option>
                            <option>Spring Wheat</option>
                            <option>Sugar beats</option>
                            <option>Sunflower</option>
                            <option>Winter Wheat</option>
                            </select>
                            </div>
                            <div className="col-2">
                            <select className="custom-select form-control">
                            <option selected>Straight Point 2 times</option>
                            <b><option>Chisel Plow</option></b>
                            <option>Straight point -Fall</option>
                            <option>Straight point -Spring</option>
                            <li className="divider"></li>
                            <option>Sweep-Fall</option>
                            <option>Sweep-Spring</option>
                            <b><option>Cultivation</option></b>
                            <option>Straight point 2 times</option>
                            <option>T2 times-Fall,Spring</option>
                            <b><option>Disk</option></b>
                            <option>Disk-Fall</option>
                            <option>Disk-Spring</option>
                            <b><option>Misc</option></b>
                            <option>No Till</option>
                            <option>Plow Till</option>
                            <option>RidgeTill</option>
                            <option>Strip Till</option>
                            <option>Vertical Till</option>
                            </select>
                            </div>

                            <div className="col-2">
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                <b><option selected>Chisel Plow</option></b>
                                    <option>Straight point -Fall</option>
                                    <option>Chisel Plow</option>
                                    <li className="divider"></li>
                                    <option>Straight point-Fall</option>
                                    <option>Straight point-Spring</option>
                                    <option>Sweep-Fall</option>
                                    <option>Sweep-Spring</option>
                                    <option>Twistedpoint-Fall</option>
                                    <option>Twistedpoint-Spring</option>
                                    <option>Cultivation</option>
                                    <option>Straight point 2 times</option>
                                    <option>T2 times-Fall,Spring</option>
                                    <option>Disk-Fall</option>
                                    <option>Disk-Spring</option>
                                    <b><option>Misc</option></b>
                                    <option>No Till</option>
                                    <option>Plow Till</option>
                                    <option>RidgeTill</option>
                                    <option>Strip Till</option>
                                    <option>Vertical Till</option>
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
                                    <option value="1">Spring</option>
                                    <option value="2">Summer</option>
                                    <option value="3">Fall</option>
                                    <option value="3">Full Season</option>
                                </select>
                                <div className="form-group" style={{marginTop:'70%'}}>
                                <select className="custom-select form-control" id="inputGroupSelect01">
                                    <option selected>Cool Season Grass</option>
                                    <option value="1">Cool Season Broad Leaf</option>
                                    <option value="2">Legume</option>
                                    <option value="3">Warm Season Grass</option>
                                    <option value="3">Warm Season Grass</option>
                                    <option value="3">Winter Annual</option>
                                </select>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                </div>
                <button className="btn btn-outline-success mt-5" style={{width:'20%',marginLeft:'35%'}} type="submit">Submit</button>
            </div>
            </div>
        </>
    )
}

export default Mangement
