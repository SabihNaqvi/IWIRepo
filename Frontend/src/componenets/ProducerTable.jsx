import React from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Main'
const Table = (props) => {
const {data} = props
const token = localStorage.getItem("token");
if(!token) { window.location = 'login'}
else {const {user} = jwt.verify(token,"randomString")
if(!user?.id) { window.location = 'login'}}

    return (
        <>
<Main/>
    <div className="container-fluid gradient-custom vh-100">
      <div className="row p-3">
        <div className="col-sm-12">
          <div className="row">
          <div className="col-2">
          <h4><Link to ='/' style={{textDecoration: 'none',color: 'green'}}>Home</Link>>Producers</h4>
          </div>
          <div className="col-6">
          <table className="table borderless td">
            <thead>
              <tr>
                <th scope="col">Producer ID</th>
                <th scope="col">Producer</th>
                <th scope="col">Advisor ID</th> 
              </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">{data[0]}</th>
                <td>{data}</td>
                C<td>{data}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
    </div>   
                    
  

</>
    )
}

export default Table
