import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Main'
const AdvisorTable = () => {
const token = localStorage.getItem("token");
if(!token) { window.location = 'login'}
else {const {user} = jwt.verify(token,"randomString")
if(!user?.id) { window.location = 'login'}}
const [advisorData,setadvisorData] = useState([]);
const getAdvisors = async () =>{
  const response = await fetch(`${url}/advisorr`);
  setadvisorData( await response.json() );
}
useEffect(() => {
  getAdvisors();
},[])
    return (
        <>
<Main/>
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-sm-12">
          <div className="row">
          <div className="col-2">
          <h4><Link to ='/' style={{textDecoration: 'none',color: 'green'}}>Home</Link>>Advisor</h4>
          </div>
          <div className="col-6">
          <table className="table borderless td">
            <thead>
              <tr>
                <th scope="col">AdvisorID</th>
                <th scope="col">Advisor</th>
                <th scope="col">Producer ID</th> 
              </tr>
            </thead>
            <tbody>
            {
             advisorData.map((currentAdvisor)=>{
               return(
                <tr>
                <th scope="row">{currentAdvisor.id}</th>
                <td>{currentAdvisor.FirstName},{currentAdvisor.Address1},{currentAdvisor.Country},{currentAdvisor.State},{currentAdvisor.City}</td>
                <td>advisorData</td>
              </tr>
               )
              })
            }
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

export default AdvisorTable
