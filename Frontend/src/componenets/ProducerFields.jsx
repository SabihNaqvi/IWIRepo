import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { url } from '../Api/api'
import jwt from 'jsonwebtoken'
import Main from './Main'

const ProducerFields = () => {
  const [FieldRecordMgmtZone,setFieldRecordMgmtZone] = useState([]);
const getFieldRecordMgmtZone = async () =>{
  const response = await fetch(`${url}/manageZoneFindAll`);
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
            <div className="container-fluid vh-100 gradient-custom">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row p-3">
                            <div className="col-6">
                            <h4><Link to ='/' style={{textDecoration: 'none'}}>Home</Link><Link to ='/producers' style={{textDecoration: 'none'}}>>Producers</Link>>Fields</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                            <table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th scope="col">Field ID</th>
      <th scope="col">Field Name</th>
      <th scope="col">Size</th>
      <th scope="col">Cultivated Area</th>
      <th scope="col">Soil test Resuls</th>
      <th scope="col">Subsurface Tile Drained</th>
      <th scope="col">Surface Tile Drained</th>
      <th scope="col">Farming Direction</th>
      <th scope="col">Years Farmed</th>
      <th scope="col">Exist Con Practice</th>
      <th scope="col">EQIP or CPS? </th>
      <th scope="col">OperationalChallenged</th>
      <th scope="col">SketchMap</th>
      <th scope="col">ZoneMap</th>
      <th scope="col">YeildMap</th>
    </tr>
  </thead>
  <tbody>
  {
        FieldRecordMgmtZone.map((currentZone)=>{
           return(
    <tr>
      <td className="table-info">{currentZone.id}</td>
      <td className="table-info"> {currentZone.plantedCrop}</td>
      <td className="table-info"> </td>
      <td className="table-info"></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"></td>
      <td className="table-info">{currentZone.productionYear}</td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
      <td className="table-info"><input type="checkbox" disabled={true}/></td>
    </tr>
    
    )
  })
}
    
  </tbody>
</table>
    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col-2">
                            <button className="btn btn-primary">Add Field</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ProducerFields
