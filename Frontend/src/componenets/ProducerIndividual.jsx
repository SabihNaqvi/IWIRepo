import React,{useEffect,useState} from 'react'
import jwt from 'jsonwebtoken'
import { url } from '../Api/api'
const ProducerIndividual = () => {
    const token = localStorage.getItem("token");
    if(!token) { window.location = 'login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = 'login'}}
    const [producerData,setproducerData] = useState([]);
    const getProducersById = async (id) =>{
        const response = await fetch(`${url}/producerById?id=${id}`);
        setproducerData( await response.json() );
      }
      useEffect(() => {
        getProducersById();
      },[])
    return (
        <>
            <section className="vh-100 gradient-custom">
  <div className="container py-3 h-100">
    <div className="row  h-50">
        <h1 className="d-flex justify-content-center align-items-center">Individual Producer no</h1>
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Address1</th>
      <th scope="col">Address2</th>
      <th scope="col">Email</th>
      <th scope="col">HomePhone</th>
      <th scope="col">CellPhone</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Country</th>
      <th scope="col">NDA</th>
      <th scope="col">Use Twitter</th>
      <th scope="col">Use Facebook</th>
    </tr>
  </thead>
  <tbody>
      
  {
  producerData.map((currentZone)=>{
      return(          
    <tr>
      <td>{currentZone.FirstName}</td>
      <td>{currentZone.LastName}</td>
      <td>{currentZone.Address1}</td>
      <td>{currentZone.Address2}</td>
      <td>{currentZone.Email}</td>
      <td>{currentZone.HomePhone}</td>
      <td>{currentZone.CellPhone}</td>
      <td>{currentZone.City}</td>
      <td>{currentZone.State}</td>
      <td>{currentZone.Country}</td>
      <td><input type="checkbox" disabled={true} checked={currentZone.NDA}/></td>
      <td><input type="checkbox" disabled={true} checked={currentZone.Twitter}/></td>
      <td><input type="checkbox" disabled={true} checked={currentZone.Facebook}/></td>
    </tr>
    
          
    )
})
}
  </tbody>
</table>
      </div>
      </div>
      </div>
</section>
        </>
    )
}

export default ProducerIndividual
