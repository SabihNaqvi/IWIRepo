import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api';
import Main from './Main';
const FieldRecordMgmtZone = () => {
const [FieldRecordMgmtZone,setFieldRecordMgmtZone] = useState([]);
const getFieldRecordMgmtZone = async () =>{
  const response = await fetch(`${url}/manageZoneFindAll`);
  setFieldRecordMgmtZone( await response.json() );
}
const getFieldRecordMgmtZoneByYear = async (year) =>{
    const response = await fetch(`${url}/manageZonefindByYear?productionYear=${year}`);
    setFieldRecordMgmtZone( await response.json() );
  }

  const changeYear = (e) =>{
    const year = e.target.value;
      getFieldRecordMgmtZoneByYear(year)
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
                                    <th className="table-secondary" scope="col" ><button style={{textDecoration: 'none',border:'0px',background:'none'}} value="2017" onClick={changeYear}>2017</button></th>
                                    <th className="table-secondary" scope="col" ><button style={{textDecoration: 'none',border:'0px',background:'none'}} value="2018" onClick={changeYear}>2018</button></th>
                                    <th className="table-secondary" scope="col" ><button style={{textDecoration: 'none',border:'0px',background:'none'}} value="2019" onClick={changeYear}>2019</button></th>
                                    <th className="table-secondary" scope="col" ><button style={{textDecoration: 'none',border:'0px',background:'none'}} value="2020" onClick={changeYear}>2020</button></th>
                                    <th className="table-secondary" scope="col" ><button style={{textDecoration: 'none',border:'0px',background:'none'}} value="2021" onClick={changeYear}>2021</button></th>
                                   <th scope="col"><button onClick={getFieldRecordMgmtZone} style={{textDecoration: 'none',border:'0px',background:'none'}}>Mgmt Zones</button></th>
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
                                      <td className="table-info">{currentZone.id}</td>
                                      <td className="table-info">{currentZone.productionYear}</td>
                                        <td className="table-info"><input type="checkbox" disabled={true} checked={currentZone.StructuralPractice}/></td>
                                        <td className="table-info">{currentZone.plantedCrop}</td>
                                        <td className="table-info">currentZone</td>
                                        <td className="table-info">currentZone</td>
                                        <td className="table-info">{currentZone.Tillage1}</td>
                                        <td className="table-info">{currentZone.Tillage2}</td>
                                        <td className="table-info"><input type="checkbox" disabled={true} checked={currentZone.CoverCrop}/></td>
                                        <td className="table-info">{currentZone.Season}</td>
                                        <td className="table-info">{currentZone.Grasses}</td>
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
                            <button className="btn btn-primary" onClick={()=>{window.location='/mangement'}}>Add Mangement Zone</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            
        </>
    )
}

export default FieldRecordMgmtZone
