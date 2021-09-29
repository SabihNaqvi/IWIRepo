import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './Main'
const Table = () => {
const token = localStorage.getItem("token");
if(!token) { window.location = 'login'}
else {const {user} = jwt.verify(token,"randomString")
if(!user?.id) { window.location = 'login'}}
const [Data,setData] = useState([]);
const getProducers = async () =>{
  const response = await fetch(`${url}/producerr`);
  setData( await response.json() );
}
useEffect(() => {
  getProducers();
},[])
    return (
        <>
<Main/>
    <div className="container-fluid">
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
            {
             Data.map((currentProducer)=>{
               return(
                <tr>
                <th scope="row">{currentProducer.id}</th>
                <td>{currentProducer.FirstName},{currentProducer.Address1},{currentProducer.Country},{currentProducer.State},{currentProducer.City}</td>
                <td>{currentProducer.AdvisorId}</td>
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

export default Table
