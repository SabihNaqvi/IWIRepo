/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React,{useState} from 'react'
import jwt from 'jsonwebtoken'
import { Link } from 'react-router-dom';
import {url} from '../Api/api';
const Signup = () => {

  const [Names,setNames] = useState("")
  const [Emails,setEmails] = useState("")
  const [Password,setPassword] = useState("")
  const [Retype_Password,setRetype_Password] = useState("")
  const[Signups,setSignups] = useState(false)
  // const history = useHistory()
  
  async function submitReview() {
    await axios.post(`${url}/Signupss`,{Name:Names,Email:Emails,Password:Password,Retype_Password:Retype_Password,Signups:Signups
  }).then((response) => {
    if(response.status === 200){
      if(response.data.token){
      localStorage.setItem("token", response.data.token)
      alert("Sign up Successfull!!")
      window.location = '/'
      }
     

    }
    
 }).catch((err)=>{
   if(err.response.status === 422 ){
    alert("Please enter credentials properly")
   }
   if(err.response.status === 401 ){
    alert("Email Already Exists")
   }
   if(err.response.status === 402 ){
    alert("The password needs to be at least 8 characters long.")
   }
   else if(err.response.status === 400 ) {
    alert("Passwords Mismatching")
   }
 })
}
const token = localStorage.getItem("token");
if(!token || token === 'undefined') {}
else {const {user} = jwt.verify(token,"randomString")
if(!user?.id) { window.location = '/'}}
  return (
    <>
<section className="vh-100 gradient-custom">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-2 text-center">
            <div className="mb-md-5 mt-md-4 pb-1">
              <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
              <p className="text-white-50 mb-5">Join our community</p>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Name</label>
                <input type="text" id="typeEmailX" className="form-control form-control-lg" name="Names" value={Names} autoComplete="off" onChange={(e)=>{setNames(e.target.value)}} />
              </div>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" className="form-control form-control-lg" name="Emails" id="exampleInputEmail1" value={Emails} autoComplete="off" onChange={(e)=>{setEmails(e.target.value)}} />
              </div>
              <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name="Password" value={Password} autoComplete="off"onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typeEmailY">Re-Type Password</label>
                <input type="Password" id="typeEmailY" className="form-control form-control-lg" name="Retype_Password" value={Retype_Password} autoComplete="off"  onChange={(e)=>{setRetype_Password(e.target.value)}} />
              </div>
              <div classname="form-group">
                <label classname="form-check-label">
                  <input type="checkbox" value={Signups} name="Signups"  onChange={(e)=>{setSignups(e.target.checked)}} size="5"/> I accept the <Link to="/" style={{textDecoration: 'none',color: 'RED',fontSize: '1em'}}>Terms of Use</Link> &amp; <Link to="/" style={{textDecoration: 'none',color: 'RED'}}>Privacy Policy</Link></label>
              </div>
              <button className="btn btn-outline-success btn-lg px-5"disabled={!Signups} type="submit" onClick={submitReview}>Sign UP</button>
              <br/>
              <p className="mb-0">Already have an account? <Link to = '/login' className="text-white-50 fw-bold"> SignIN</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Signup
