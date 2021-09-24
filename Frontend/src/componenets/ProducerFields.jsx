import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { url } from '../Api/api'
import jwt from 'jsonwebtoken'
import Main from './Main'

const ProducerFields = () => {
  const[FieldName,setFieldName] = useState("")
  const[Size,setSize] = useState()
  const[CultivatedArea,setCultivatedArea] = useState()
  const[SoilTestResult,setSoilTestResult] = useState(false)
  const[SubSurfaceTileDrained,setSubSurfaceTileDrained] = useState(false)
  const[SurfaceTileDrained,setSurfaceTileDrained] = useState(false)
  const[FarmingDirection,setFarmingDirection] = useState("")
  const[YearFarmed,setYearFarmed] = useState()
  const[ExistConePractice,setExistConePractice] = useState(false)
  const [EQIPorCPS,setEQIPorCPS] = useState(false)
    async function submitReview(e) {
      e.preventDefault()
        await axios.post(`${url}/producerfields`,{FieldName:FieldName,Size:Size,CultivatedArea:CultivatedArea,SoilTestResult:SoilTestResult,SubSurfaceTileDrained:SubSurfaceTileDrained,SurfaceTileDrained:SurfaceTileDrained,FarmingDirection:FarmingDirection, YearFarmed:YearFarmed, ExistConePractice:ExistConePractice,EQIPorCPS:EQIPorCPS
      }).then((response) => {
        if(response.status === 200){
          alert("Record Registered Successfully!!")
          window.location = '/fieldrecord'
        }
     }).catch((err)=>{
      if(err.response.status === 422 ){
       alert("Email Already Exist")
      }
      else if(err.response.status === 400 ) {
       alert("Please Enter Your Credential Properly")
      }
    })
    }
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="table-info"><Link to ='/fieldrecord' style={{textDecoration: 'none',color: 'green'}}>1</Link></td>
      <td className="table-info"><input type="name" value={FieldName} name="FieldName"  onChange={(e)=>{setFieldName(e.target.value)}} size="5"/></td>
      <td className="table-info"><input type="name" value={Size} name="Size"  onChange={(e)=>{setSize(e.target.value)}} size="5"/></td>
      <td className="table-info"><input type="name" value={CultivatedArea} name="CultivatedArea"  onChange={(e)=>{setCultivatedArea(e.target.value)}} size="5"/></td>
      <td className="table-info"><input type="checkbox" value={SoilTestResult} name="SoilTestResult"  onChange={(e)=>{setSoilTestResult(e.target.checked)}} size="5"/></td>
      <td className="table-info"><input type="checkbox" value={SubSurfaceTileDrained} name="SubSurfaceTileDrained"  onChange={(e)=>{setSubSurfaceTileDrained(e.target.checked)}} size="5"/></td>
      <td className="table-info"><input type="checkbox" value={SurfaceTileDrained} name="SurfaceTileDrained"  onChange={(e)=>{setSurfaceTileDrained(e.target.checked)}} size="5"/></td>
      <td className="table-info"><input type="name" value={FarmingDirection} name="FarmingDirection"  onChange={(e)=>{setFarmingDirection(e.target.value)}} size="5"/></td>
      <td className="table-info"><input type="name" value={YearFarmed} name="YearFarmed"  onChange={(e)=>{setYearFarmed(e.target.value)}} size="5"/></td>
      <td className="table-info"><input type="checkbox" value={ExistConePractice} name="ExistConePractice"  onChange={(e)=>{setExistConePractice(e.target.checked)}} size="5"/></td>
      <td className="table-info"><input type="checkbox" value={EQIPorCPS} name="EQIPorCPS"  onChange={(e)=>{setEQIPorCPS(e.target.checked)}} size="5"/></td>
    </tr>
    
  </tbody>
</table>
    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                        <div className="col-2">
                            {/* {{if (click = true)} */}
                            <button className="btn btn-primary" onClick = {submitReview}>Add Field</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ProducerFields
