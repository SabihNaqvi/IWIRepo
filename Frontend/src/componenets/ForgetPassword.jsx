/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import axios from 'axios';
import { url } from '../Api/api';
const forgetPassword = () => {

  const [Email,setEmail] = useState("")
  
  async function forgetPasswordUsers() {
    await axios.post(`${url}/forget-passwords`,{Email:Email}).then((response) => {
      if(response.status === 200){
        alert("OTP SENT AT YOUR MAIL!!")
        window.location = '/newpassword'
      }
   }).catch((err)=>{
    if(err.response.status === 422 ){
     alert("Please enter credentials properly")
    }
  })
  }
  return (
    <>
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-80">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-3 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">FORGET PASSWORD</h2>
              <p className="text-white-50 mb-5">Please enter your registered mail</p>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={Email} autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <button className="btn btn-outline-success btn-lg px-5" type="submit" onClick={forgetPasswordUsers}>Get new password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
          <div className="row p-3">
            <div className="col-6">
            <h4><Link to ='/' style={{textDecoration: 'none'}}>Home</Link>>Forgetpassword</h4>
            </div>
          </div>
          <h4 style={{marginLeft:'30%',marginTop:'3%'}}>Forgetpassword</h4>
          <div className="row bgl p-3 w-auto" style={{marginLeft:'30%',marginTop:'3%',marginRight:'30%'}}>
            <div className="col-12">
              <div className="form-group">
              <label className="col-form-label">Email:</label>
              <input type="email" className="form-control" name="Email" id="exampleInputEmail1" value={Email} autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
            </div>
            <div className="row p-2">
              <div className="col-12">
              <button type="submit" className="btn btn-primary" onClick={forgetPasswordUsers}>Get new password</button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
   */}
  </>
  )
}


export default forgetPassword
