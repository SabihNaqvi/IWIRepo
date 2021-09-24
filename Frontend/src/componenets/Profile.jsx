import React from 'react'
import jwt from 'jsonwebtoken'
import Main from './Main'
const Profile = () => {
    const token = localStorage.getItem("token");
    if(!token) { window.location = 'login'}
    else {const {user} = jwt.verify(token,"randomString")
    if(!user?.id) { window.location = 'login'}}
    return (
        <>
        <Main/>
            <div className="container-fluid gradient-custom">
                <div className="row pt-3"></div>
                <div className="row p-3 text-center">
                    <div className="col-4">
                        <h5>Name</h5>
                    </div>
                    <div className="col-4">
                        <h5>Email</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
