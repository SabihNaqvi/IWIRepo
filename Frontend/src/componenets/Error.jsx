import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <>
            <div className="page-wrap d-flex flex-row align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
       <h1 className="fw-bold mb-2 text-uppercase">IWI</h1>
        <span className="display-1 d-block">404</span>
        <div className="mb-4 lead">The page you are looking for was not found.</div>
        <Link to="/" className="btn btn-link">Back to Home</Link>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Error
