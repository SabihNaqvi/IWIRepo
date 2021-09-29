import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api';
import Main from './Main';
// import Mangement from './Mangement'
const FieldRecordMgmtZone = () => {
const [FieldRecordMgmtZone,setFieldRecordMgmtZone] = useState([]);
const getFieldRecordMgmtZone = async () =>{
  const response = await fetch(`${url}/manageZoneFindAll`);
//   const data = await response.json()
//   console.log(data)
  setFieldRecordMgmtZone( await response.json() );
}
useEffect(() => {
  getFieldRecordMgmtZone();
},[])
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
                <div className="row p-3">
                        <div className="col-5">
                        <h4><Link to ='/' style={{textDecoration: 'none'}}>Home</Link> 
                        <Link to ='/producerprofile' style={{textDecoration: 'none'}}>&gt;Producers</Link>
                        <Link to ='/Producerfield' style={{textDecoration: 'none'}}>&gt;Fields</Link>&gt;Id</h4>
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
                                    <th className="table-secondary" scope="col"><Link to ='/' style={{textDecoration: 'none'}}>2021</Link></th>
                                    <th scope="col"><Link to ='/mangement' style={{textDecoration: 'none'}}>Mgmt Zones</Link></th>
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
                                        <th scope="col" className="table-info">ID</th>
                                        <th scope="col" className="table-info">Year</th>
                                        <th scope="col" className="table-info">Yeild</th>
                                        <th scope="col" className="table-info">Crop</th>
                                        <th scope="col" className="table-info">2yr rotation</th>
                                        <th scope="col" className="table-info">3yr rotation</th>
                                        <th scope="col" className="table-info">Primary Tillage</th>
                                        <th scope="col" className="table-info">Secondary Tillage</th>
                                        <th scope="col" className="table-info">Cover Crop</th>
                                        <th scope="col" className="table-info">CC Season</th>
                                        <th scope="col" className="table-info">CC Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        FieldRecordMgmtZone.map((currentZone)=>{
                                            return(
                                    <tr>
                                      <th scope="row">{currentZone.id}</th>
                                      <th>{currentZone.productionYear}</th>
                                        <th><input type="checkbox" disabled={true} checked={currentZone.StructuralPractice}/></th>
                                        <th>{currentZone.plantedCrop}</th>
                                        <th>currentZone</th>
                                        <th>currentZone</th>
                                        <th>{currentZone.Tillage1}</th>
                                        <th>{currentZone.Tillage2}</th>
                                        <th><input type="checkbox" disabled={true} checked={currentZone.CoverCrop}/></th>
                                        <th>{currentZone.Season}</th>
                                        <th>{currentZone.Grasses}</th>
                                    </tr>
                                    )
                                })
                              }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            {/* {{if (click = true)} */}
                            <button className="btn btn-primary" 
                            // onClick = {submitReview}
                            >Add Mangement Zone</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            
        </>
    )
}

export default FieldRecordMgmtZone
