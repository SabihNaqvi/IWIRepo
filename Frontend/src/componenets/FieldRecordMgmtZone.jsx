import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api';
import Main from './Main';
// import Mangement from './Mangement'
const FieldRecordMgmtZone = () => {
    const [FieldRecordMgmtZone,setFieldRecordMgmtZone] = useState({Yield:"",Crop:"",secondyrRotation:"",thirdyrRotation:"",PrimaryTillage:"",SecondaryTillage:"",CCSeason:"", CCtype:""})
    const[CoverCrop,setCoverCrop] = useState(false)
    let name,value;
    const handleInput = (event)=>{
      name = event.target.name
      value = event.target.value
      setFieldRecordMgmtZone({...FieldRecordMgmtZone,[name]:value})
    }
    async function submitReview(e) {
        e.preventDefault()
        await axios.post(`${url}/fieldrecordmgmtzones`,{Yield:FieldRecordMgmtZone.Yield,Crop:FieldRecordMgmtZone.Crop,secondyrRotation:FieldRecordMgmtZone.secondyrRotation,thirdyrRotation:FieldRecordMgmtZone.thirdyrRotation,PrimaryTillage:FieldRecordMgmtZone.PrimaryTillage,SecondaryTillage:FieldRecordMgmtZone.SecondaryTillage,
        CoverCrop:CoverCrop,CCSeason:FieldRecordMgmtZone.CCSeason, CCtype:FieldRecordMgmtZone.CCtype
      }).then((response) => {
        if(response.status === 200){
            alert("Record Save Successfully!!")
            window.location = '/mangement'
        }
     }).catch((err)=>{
        if(err.response.status === 400 ) {
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
                                    <tr>
                                      <th scope="row">1</th>
                                      <th></th>
                                       <th> <input type="name" value={FieldRecordMgmtZone.name} name="Yield"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="Crop"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="secondyrRotation"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="thirdyrRotation"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="PrimaryTillage"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="SecondaryTillage"  onChange={handleInput} size="5"/></th>
                                        <th><input type="checkbox" value={CoverCrop} name="CoverCrop"  onChange={(e)=>{setCoverCrop(e.target.checked)}} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="CCSeason"  onChange={handleInput} size="5"/></th>
                                        <th><input type="name" value={FieldRecordMgmtZone.name} name="CCtype"  onChange={handleInput} size="5"/></th>
                                        {/* <th><input size="5"/></th> */}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            {/* {{if (click = true)} */}
                            <button className="btn btn-primary" onClick = {submitReview}>Add Mangement Zone</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
            
        </>
    )
}

export default FieldRecordMgmtZone
