import React,{useState} from 'react';
import jwt from 'jsonwebtoken';
import Main from './Main';
import { url } from '../Api/api';
import axios from 'axios';
const Mangement = () => {
const [Fieldpicker,setFieldpicker] = useState("")
const [plantedCrop,setplantedCrop] = useState("")
const [Tillage1,setTillage1] = useState("")
const [Tillage2,setTillage2] = useState("")
const [Season,setSeason] = useState("")
const [Grasses,setGrasses] = useState("")
const [PhosphorousFert,setPhosphorousFert] = useState("")
const [NitrogenFert,setNitrogenFert] = useState("")
const [StructuralReason,setStructuralReason] = useState("")
const [productionYear,setproductionYear] = useState()
const[CoverCrop,setCoverCrop] = useState(false)
const[StructuralPractice,setStructuralPractice] = useState(false)
async function submitReview() {
    await axios.post(`${url}/manageZone`,{Fieldpicker:Fieldpicker,productionYear:productionYear,plantedCrop:plantedCrop,Tillage1:Tillage1,Tillage2:Tillage2,Season:Season,Grasses:Grasses,PhosphorousFert:PhosphorousFert,NitrogenFert:NitrogenFert,CoverCrop:CoverCrop,StructuralPractice:StructuralPractice,StructuralReason:StructuralReason
  }).then((response) => {
      console.log(`RESPONE HERE ${response}`)
    }).catch((err)=>{
        console.log(`ERROR BECAUSE OF ${err}`)
        }

    )
}
// const[Signups,setSignups] = useState(false)
    const token = localStorage.getItem("token");
    if(!token || token === 'undefined') {window.location = '/login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = '/login'}}
    return (
        <>
        <Main/>
            <div className="container-fluid gradient-custom vh-110">
            <div className="container ">
                <div className="row cal">
                <div className="bor">
                    <div className="col-sm-12 " >
                        <div className="row pt-5">
                            <div className="col-3"></div>
                            <div className="col-5">
                            {/* <label>Production productionYear</label>
                            <h1>{Fieldpicker},{productionYear},{plantedCrop},{Tillage1},{Tillage2},{Season},{Grasses},{PhosphorousFert},{NitrogenFert}</h1> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect01" placeholder="Field" name="Fieldpicker" onChange={(e)=>{setFieldpicker(e.target.value)}}>
                                <option selected>Field</option>
                                <option value="1612351-1(Old 40)">1612351-1(Old 40)</option>
                                <option value="1612351-2(New W 40)">1612351-2(New W 40)</option>
                                <option value="1612351-2(Farmyard)">1612351-2(Farmyard)</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-3">
                                <input className="text-primary form-control"placeholder="Year" type="number" min="1900" max="2099" step="1" name="productionYear" value={productionYear} onChange={(e)=>{setproductionYear(e.target.value)}} />
                            </div>
                        </div>


                        <div className="row pt-5">
                            <div className="col-3 col-md-3">
                            <select className="custom-select form-control" id="inputGroupSelect01" placeholder="Field" name="plantedCrop" onChange={(e)=>{setplantedCrop(e.target.value)}}>
                            <option selected>Crop</option>
                           <option className="bol" value="Alfalfa">Alfalfa</option>
                            <option value="Alfala">Alfala</option>
                            <option value="Brome">Brome</option>
                            <li className="divider"></li>
                            <option className="bol" value="Beans">Beans</option>
                           
                            <option value="pinto">pinto</option>
                            <option value="pinto wide row">pinto wide row</option>
                            <option className="bol" value="Corn">Corn</option>
                            <option value="Grain">Grain</option>
                            <option value="Grain,narrow row">Grain,narrow row</option>
                            <option value="Seed">Seed</option>
                            <option value="Silage">Silage</option>
                            <option value="Forage sorghum">Forage sorghum</option>
                            <option value="Oats">Oats</option>
                            <option value="Rye">Rye</option>
                            <option>Ryegrass</option>
                            <option className="bol" value="Soybeans">Soybeans</option>
                            <option value="Wide row">Wide row</option>
                            <option value="Narrow row">Narrow row</option>
                            <option value="Spring Barley">Spring Barley</option>
                            <option value="Spring Wheat">Spring Wheat</option>
                            <option value="Sugar beats">Sugar beats</option>
                            <option value="Sunflower">Sunflower</option>
                            <option value="Winter Wheat">Winter Wheat</option>
                            </select>
                            </div>
                            <div className="col-3 col-md-3">
                            <select className="custom-select form-control"  name="Tillage1" onChange={(e)=>{setTillage1(e.target.value)}}>
                            <option selected>Tillage 1</option>
                            <option value="Straight Point 2 times">Straight Point 2 times</option>
                            <option className="bol" value="Chisel Plow">Chisel Plow</option>
                            <option value="Straight point -Fall">Straight point -Fall</option>
                            <option value="Straight point -Spring">Straight point -Spring</option>
                            <li className="divider"></li>
                            <option value="Sweep-Fall">Sweep-Fall</option>
                            <option value="Sweep-Spring">Sweep-Spring</option>
                            <option className="bol" value="Cultivation">Cultivation</option>
                            <option value="Straight point 2 times">Straight point 2 times</option>
                            <option value="T2 times-Fall,Spring">T2 times-Fall,Spring</option>
                            <option value="Disk" className="bol">Disk</option>
                            <option value="Disk-Fall">Disk-Fall</option>
                            <option value="Disk-Spring">Disk-Spring</option>
                            <option value="Misc" className="bol">Misc</option>
                            <option value=">No Till">No Till</option>
                            <option value="Plow Till">Plow Till</option>
                            <option value="RidgeTill">RidgeTill</option>
                            <option value="Strip Till">Strip Till</option>
                            <option value="Vertical Till">Vertical Till</option>
                            </select>
                            </div>

                            <div className="col-3 col-md-3">
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect02" name="Tillage2" onChange={(e)=>{setTillage2(e.target.value)}}>
                               <option className="bol" selected>Tillage2</option>
                                    <option value="Straight point -Fall">Straight point -Fall</option>
                                    <option value="Chisel Plow" className="bol">Chisel Plow</option>
                                    <li className="divider"></li>
                                    <option value="Straight point-Fall">Straight point-Fall</option>
                                    <option value="Straight point-Spring">Straight point-Spring</option>
                                    <option value="Sweep-Fall">Sweep-Fall</option>
                                    <option value="Sweep-Spring">Sweep-Spring</option>
                                    <option value="Twistedpoint-Fall">Twistedpoint-Fall</option>
                                    <option value="Twistedpoint-Spring">Twistedpoint-Spring</option>
                                    <option value="Cultivation" className="bol">Cultivation</option>
                                    <option value="Straight point 2 times">Straight point 2 times</option>
                                    <option value="T2 times-Fall,Spring">T2 times-Fall,Spring</option>
                                    <option value="Disk-Fall">Disk-Fall</option>
                                    <option value="Disk-Spring">Disk-Spring</option>
                                   <option value="Misc" className="bol">Misc</option>
                                    <option value="No Till">No Till</option>
                                    <option value="Plow Till">Plow Till</option>
                                    <option value="RidgeTill">RidgeTill</option>
                                    <option value="Strip Till">Strip Till</option>
                                    <option value="Vertical Till">Vertical Till</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-3 col-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"  value={CoverCrop} name="CoverCrop"  onChange={(e)=>{setCoverCrop(e.target.checked)}}/>
                                    <label className="form-check-label" for="exampleRadios1">
                                        Cover Crop
                                    </label>
                                </div>
                      

                          <br/>
                            <div className="form-group">
                                <select className="custom-select form-control" id="inputGroupSelect03" name="Season" onChange={(e)=>{setSeason(e.target.value)}} >
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Full Season">Full Season</option>
                                </select>
                                <div className="form-group" style={{marginTop:'70%'}}>
                                <select className="custom-select form-control" id="inputGroupSelect01"  name="Grasses" onChange={(e)=>{setGrasses(e.target.value)}} >
                                    <option value="Cool Season Grass" selected>Cool Season Grass</option>
                                    <option value="Cool Season Broad Leaf">Cool Season Broad Leaf</option>
                                    <option value="Legume">Legume</option>
                                    <option value="Warm Season Grass">Warm Season Grass</option>
                                    <option value="Warm Season Grass">Warm Season Grass</option>
                                    <option value="Winter Annual">Winter Annual</option>
                                </select>
                                </div>
                                </div>
                           </div>
                            </div>

                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-3">
                                <select className="custom-select form-control" id="inputGroupSelect01"  name="PhosphorousFert" onChange={(e)=>{setPhosphorousFert(e.target.value)}} >
                                    <option selected>Phosphorous Fert</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Basic">Basic</option>
                                </select>
                                </div>
                                <div className="col-3">
                                <select className="custom-select form-control" id="inputGroupSelect01"  name="NitrogenFert" onChange={(e)=>{setNitrogenFert(e.target.value)}} >
                                    <option selected>Nitrogen Fert</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Basic">Basic</option>
                                </select>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-5">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"  id="exampleRadios2" value={StructuralPractice} name="StructuralPractice"  onChange={(e)=>{setStructuralPractice(e.target.checked)}}/>
                                    <label className="form-check-label" for="exampleRadios2">
                                        Interested In Structural Practice?
                                    </label>
                                </div>
                                </div>
                                <div className="col-5 mt-3 mb-3">
                                <select className="custom-select form-control" id="inputGroupSelect05"  name="StructuralReason" onChange={(e)=>{setStructuralReason(e.target.value)}} >
                                    <option selected>Reason For Structural Practice</option>
                                    <option value="Reduce Soil Movement">Reduce Soil Movement</option>
                                    <option value="Trap Moving Soil">Trap Moving Soil</option>
                                    <option value="Reduce Run off">Reduce Runn off</option>
                                    <option value="Convert Water Downstream">Convert Water Downstream</option>
                                    <option value="Store Water">Store Water</option>
                                    <option value="Improve Drainage">Improve Drainge</option>
                                </select>
                                </div>
                            </div>
                       
                        
            <button className="btn btn-outline-success" style={{width:'20%',marginLeft:'35%' ,marginTop:'10%',marginBottom:'5%'}} type="submit"
             onClick={submitReview}
             >Submit</button>
                </div>
               
            </div></div>
            </div>
            </div>
        </>
    )
}

export default Mangement
