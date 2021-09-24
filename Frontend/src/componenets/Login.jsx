/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React,{useState} from 'react';
import jwt from 'jsonwebtoken'
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Main from './Main';
import { url } from '../Api/api';
const Login = () => {
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")
  const [error,setError] = useState(null)
  async function loginUsers(e) {
    e.preventDefault();
  await axios.post(`${url}/logins`,{Email:Email,Password:Password}).then((response) => {

if(response.status === 200){
  localStorage.setItem("token", response.data.token)
  setError(null)
  alert("Sign in Successfull!!")
  window.location = '/'
}
}).catch((err) => {
  if(err.response.status === 422 || 400 ){
    alert("Invalid Credential")
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
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-80">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-3 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" name="Email"  value={Email} autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}} />
              </div>
              <div className="form-outline form-white mb-2">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" name="Password" value={Password} autoComplete="off"onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
              <p className="small mb-5 pb-lg-2"><Link className="text-white-50" to='/forget-Password'>Forgot password?</Link></p>
              <button className="btn btn-outline-success btn-lg px-5" type="submit" onClick={loginUsers}>Login</button>
              {error && <p>{error}</p>}
            </div>
            <div>
              <p className="mb-0">Don't have an account? <Link to = '/signups' className="text-white-50 fw-bold">Sign Up</Link></p>
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

export default Login
