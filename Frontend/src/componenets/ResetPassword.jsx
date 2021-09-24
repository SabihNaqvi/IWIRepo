import React,{useState} from 'react'
import axios from 'axios'
import { url } from '../Api/api';
const ResetPassword = () => {

    const [Email,setEmail] = useState("")
    const [otp,setotp] = useState("")
    const [Password,setPassword] = useState("")
    async function forgetPassword() {
        await axios.post(`${url}/newpassword`,{Email:Email,otp:otp,Password:Password}).then((response) => {
          if(response.status === 200){
            window.location = 'login'
          }
       })
      }
    return (
        <>
             <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: '1rem'}}>
          <div className="card-body p-3 text-center">
            <div className="mb-md-5 mt-md-4 pb-1">
              <h2 className="fw-bold mb-2 text-uppercase">RESET PASSWORD</h2>
              <p className="text-white-50 mb-5">Please enter your registered mail</p>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={Email} autoComplete="off" onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">OTP</label>
                <input type="password"  className="form-control form-control-lg" value={otp} autoComplete="off" onChange={(e)=>{setotp(e.target.value)}}/>
              </div>
              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">New Password</label>
                <input type="password" id="typeEmailX" className="form-control form-control-lg"  name="Password" value={Password} autoComplete="off" onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <button className="btn btn-outline-success btn-lg px-5" type="submit" onClick={forgetPassword}>Get new password</button>
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

export default ResetPassword
