import React from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
const FieldRecord = () => {
    const token = localStorage.getItem("token");
    if(!token || token === 'undefined') {window.location = '/login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = '/login'}}
    return (
        <>
            <div className="vh-100 container-fluid gradient-custom">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="row p-3">
                            <div className="col-6">
                            <h4><Link to ='/' style={{textDecoration: 'none',color: 'green'}}>Home</Link> 
                            <Link to ='/producerprofile' style={{textDecoration: 'none',color: 'green'}}>>Producers</Link>
                            <Link to ='/Producerfield' style={{textDecoration: 'none',color: 'green'}}>>Fields</Link>>Id</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <table class="table table-striped table-bordered tdp" style={{"margin-bottom": "0px"}}>
                                    <thead>
                                        <tr>
                                    <th className="table-secondary" scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2017</Link></th>
                                    <th className="table-secondary" scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2018</Link></th>
                                    <th className="table-secondary" scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2019</Link></th>
                                    <th className="table-secondary" scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2020</Link></th>
                                    <th scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2021</Link></th>
                                    <th className="table-secondary" scope="col"><Link to ='/mangement' style={{textDecoration: 'none'}}>Mgmt Zones</Link></th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="row tdd">
                            <div className="col-12">
                                <table className="table table-striped table-bordered tdd">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="table-info">Field ID</th>
                                            <th scope="col" className="table-info">Field Name</th>
                                            <th scope="col" className="table-info">FSAFieldNumber</th>
                                            <th scope="col" className="table-info">	Status</th>
                                            <th scope="col" className="table-info">Longitude</th>
                                            <th scope="col" className="table-info">Latitude</th>
                                            <th scope="col" className="table-info">	Range Value</th>
                                            <th scope="col" className="table-info">Township</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <button className="btn btn-primary" onClick = {()=>window.location = '/fieldrecord'}>Add Field</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FieldRecord
