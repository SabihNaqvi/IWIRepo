import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { url } from '../Api/api';
import Main from './Main';
const ProducerProfile = () => {
    const [producerForm, setproducerForm] = useState({FirstName:"",MiddleInitial:"",LastName:"",Email:"",Address1:"",Address2:"",HomePhone:"",CellPhone:"",City:"",State:"",Country:""});
    let name,value;
  const[NDA,setNDA] = useState(false)
  const[Twitter,setTwitter] = useState(false)
  const[Facebook,setFacebook] = useState(false)
    const handleInput = (event)=>{
      name = event.target.name
      value = event.target.value
      setproducerForm({...producerForm,[name]:value})
    }
    async function submitReview() {
      await axios.post(`${url}/producers`,{FirstName:producerForm.FirstName,MiddleInitial:producerForm.MiddleInitial,LastName:producerForm.LastName,Email:producerForm.Email,Address1:producerForm.Address1,Address2:producerForm.Address2,HomePhone:producerForm.HomePhone,CellPhone:producerForm.CellPhone,City:producerForm.City,State:producerForm.State,Country:producerForm.Country,NDA:NDA,Twitter:Twitter,Facebook:Facebook
    }).then((response) => {
      if(response.status === 200){
      alert("Producer Registered Successfully!!")
      }
   }).catch((err)=>{
    if(err.response.status === 422 ){
     alert("No User Exists Against this Email")
    }
    else if(err.response.status === 400 ) {
     alert("User Already Registered as Producer")
    }
    else if(err.response.status === 409 ){
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
        <div className="container-fluid gradient-custom vh-95">
          <div className="row">
            <div className="col-sm-12">
              <div className="row p-0">
                <div className="col-6">
                <h4><Link to ='/'style={{textDecoration: 'none',color: 'green'}}>Home</Link>>Producer</h4>
                </div>
              </div>
              <div className="row p-2  h-auto w-auto bg-dark text-white" style={{border:'2px solid black',maxWidth:'50%',marginLeft:'25%',borderRadius: '1rem'}}>
                <div className="form-group col-5">
                  <input type="name" className="form-control" value={producerForm.name} name="FirstName" placeholder="First Name" autoComplete="off" onChange={handleInput}/>
                </div>
                <div className="form-group col-2">
                  <input type="name" className="form-control" value={producerForm.name} name="MiddleInitial" placeholder="M.I" autoComplete="off" onChange={handleInput}/>
                </div>
                <div className="form-group col-5">
                  <input type="name" className="form-control" value={producerForm.name} name="LastName" placeholder="Last Name" autoComplete="off" onChange={handleInput}/>
                </div>
                <div className="form-group col-12 p-3">
                  <input type="text" className="form-control" value={producerForm.name} name="Address1" placeholder="Address 1" autoComplete="off" onChange={handleInput}/>
                </div>
                <div className="form-group col-12 p-3">
                  <input type="text" className="form-control" value={producerForm.name} name="Address2" placeholder="Address 2" autoComplete="off" onChange={handleInput}/>
                </div>
                <div className="row">
                  <div className="form-group col-6 p-3">
                    <input type="text" className="form-control" value={producerForm.name} name="HomePhone"  placeholder="Home Ph #" autoComplete="off" onChange={handleInput}/>
                  </div>
                  <div className="form-group col-6 p-3">
                    <input type="text" className="form-control" value={producerForm.name} name="CellPhone" placeholder="Cell ph #" autoComplete="off" onChange={handleInput}/>
                  </div>
                </div>
                <div className="row p-3">
                  <div className="form-group col-5">
                    <input type="text" className="form-control" value={producerForm.name} name="City" placeholder="City" autoComplete="off" onChange={handleInput}/>
                  </div>
                  <div className="form-group col-2">
                    <input type="text" className="form-control" value={producerForm.name} name="State" placeholder="state" autoComplete="off" onChange={handleInput}/>
                  </div>
                  <div className="form-group col-5">
                    <input type="text" className="form-control" value={producerForm.name} name="Country" placeholder="Country" autoComplete="off" onChange={handleInput}/>
                  </div>
                </div>
                <div className="row p-3">
                  <div className="form-group col-12">
                    <input type="email" className="form-control" value={producerForm.name} name="Email" placeholder="Email" autoComplete="off" onChange={handleInput}/>
                  </div>
                  <div className="row">
                    <div className="col-4">
                    <div className="form-group p-3">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" value={NDA} name="NDA"  onChange={(e)=>{setNDA(e.target.checked)}}/>
                    <label className="form-check-label" for="gridCheck">
                      NDA
                    </label>
                    </div>
                  </div>
                  </div>
                  <div className="col-4">
                  <div className="form-group p-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" value={Twitter} name="Twitter"  onChange={(e)=>{setTwitter(e.target.checked)}}/>
                      <label className="form-check-label" for="gridCheck">
                        Use Twitter
                      </label>
                    </div>
                  </div>
                  </div>
                  <div className="col-4">
                  <div className="form-group p-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck" value={Facebook} name="Facebook"  onChange={(e)=>{setFacebook(e.target.checked)} }/>
                      <label className="form-check-label" for="gridCheck">
                        Use Facebook
                      </label>
                    </div>
                  </div>
                  </div>
                    </div>
                
                  </div>
                  
                  <button type="submit" className="btn btn-outline-success btn-lg px-5" onClick={submitReview}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          
        </>
    )
}

export default ProducerProfile
