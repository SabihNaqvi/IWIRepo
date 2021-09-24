
import React from 'react'
import jwt from 'jsonwebtoken'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link } from 'react-router-dom';
const Main = () => {
 function submitReview() {
  localStorage.clear()
  alert('Signuout Successfully')
  window.location = 'login'
}


    const token = localStorage.getItem("token");
    if(!token) { window.location = '/login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = '/'}}
    return (
        <>


<nav className="navbar navbar-expand-xl navbar-dark bg-dark">
  <Link to="#" className="navbar-brand"><i className="fa fa-cube" /><b>IWI</b></Link>
  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
    <span className="navbar-toggler-icon" />
  </button>
  {/* Collection of nav links, forms, and other content for toggling */}
  <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
    <div className="navbar-nav">
      <Link to="/" className="nav-item nav-link active">Home</Link>
      <Link className="nav-link" to ="/advisor" >Advisor</Link>
      <Link className="nav-link" to ="/producerprofile" >Producer</Link>
      <Link className="nav-link" to ="/fieldrecordmgmtzone" >Field record</Link>
      <Link to="/Producerfield" className="nav-item nav-link" >Producer Field</Link>
    </div>
    <div className="navbar-nav ml-auto">
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={submitReview}>Logout</button>

        </div>
      </div>
</nav>


        </>
    )
}

export default Main
